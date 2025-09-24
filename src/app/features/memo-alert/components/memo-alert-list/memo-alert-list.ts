import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MemoAlertModel } from '../../models/memo-alert';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MemoAlertService } from '../../services/memo-alert';
import { OverlayService } from '../../../../shared/services/overlay-drawer';

@Component({
  selector: 'app-memo-alert-list',
  standalone: false,
  templateUrl: './memo-alert-list.html',
  styleUrl: './memo-alert-list.scss'
})
export class MemoAlertList {
  @ViewChild('editTemplate') editTemplate!: TemplateRef<any>;

  isLoading = true;
  memoAlertTypes: string[] = [];

  searchQuery = '';
  selectedType: string | null = null;

  /** raw data */
  allMemoAlerts: MemoAlertModel[] = [];
  /** original data (for reset) */
  originalMemoAlerts: MemoAlertModel[] = [];
  /** filtered + paginated data */
  displayedMemoAlerts: MemoAlertModel[] = [];

  // pagination
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20];
  pageIndex = 0;
  total = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private overlayService: OverlayService, private memoAlertService: MemoAlertService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.memoAlertService.getMemoAlerts().subscribe({
      next: (data: MemoAlertModel[]) => {
        this.allMemoAlerts = [...data];
        this.originalMemoAlerts = [...data];

        this.memoAlertTypes = Array.from(new Set(data.map(memoAlert => memoAlert.type))).sort();
       
        this.total = data.length;
        this.applyFilter();
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }

  /** filter + paginate */
  private getFilteredData(): MemoAlertModel[] {
    let filtered = [...this.allMemoAlerts];

    if (this.searchQuery.trim()) {
      const query = this.searchQuery.toLowerCase();
      filtered = filtered.filter(alert =>
        alert.title.toLowerCase().includes(query) ||
        alert.type.toLowerCase().includes(query) ||
        new Date(alert.date).toLocaleDateString().toLowerCase().includes(query)
      );
    }

    if (this.selectedType) {
      filtered = filtered.filter(alert => alert.type === this.selectedType);
    }

    this.total = filtered.length;
    return filtered;
  }

  applyFilter(): void {
    const filtered = this.getFilteredData();
    const start = this.pageIndex * this.pageSize;
    const end = start + this.pageSize;
    this.displayedMemoAlerts = filtered.slice(start, end);
  }

  onClearSearch() {
    this.searchQuery = '';
    this.applyFilter();
  }
  
  onPageChange(event: PageEvent): void {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.applyFilter();
  }

  resetFilters(): void {
    this.searchQuery = '';
    this.selectedType = null;
    this.allMemoAlerts = [...this.originalMemoAlerts];
    this.pageIndex = 0;
    this.paginator.firstPage(); // reset paginator UI
    this.applyFilter();
  }

  filterByType(type: string): void {
    this.selectedType = type;
    this.pageIndex = 0;
    this.paginator.firstPage();
    this.applyFilter();
  }

  sortByDate(): void {
    this.allMemoAlerts = [...this.allMemoAlerts].sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
    this.applyFilter();
  }

  sortByType(): void {
    this.allMemoAlerts = [...this.allMemoAlerts].sort((a, b) =>
      a.type.localeCompare(b.type)
    );
    this.applyFilter();
  }

  /**
   * Opens the overlay with the dynamic content template.
   */
  openOverlay() {
    this.overlayService.open(this.editTemplate, false);
  }

  /**
   * A method to handle a button click from within the overlay.
   */
  closeOverlay() {
    this.overlayService.close();
  }
}
