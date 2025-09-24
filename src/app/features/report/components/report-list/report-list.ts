import { Component, TemplateRef, ViewChild } from '@angular/core';
import { OverlayService } from '../../../../shared/services/overlay-drawer';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ReportService } from '../../services/report';
import { ReportModel } from '../../models/report';

@Component({
  selector: 'app-report-list',
  standalone: false,
  templateUrl: './report-list.html',
  styleUrl: './report-list.scss'
})
export class ReportList {
  @ViewChild('editTemplate') editTemplate!: TemplateRef<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  isLoading = true;
  reportTypes: string[] = [];
  reportStatuses: string[] = [];

  searchQuery = '';
  selectedType: string | null = null;
  selectedStatus: string | null = null;

  /** raw data */
  allReports: ReportModel[] = [];
  /** original data (for reset) */
  originalReports: ReportModel[] = [];
  /** filtered + paginated data */
  displayedReports: ReportModel[] = [];

  // pagination
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20];
  pageIndex = 0;
  total = 0;

  
  constructor(private overlayService: OverlayService, private reportService: ReportService) {}
  
  ngOnInit(): void {
    this.isLoading = true;
    this.reportService.getReports().subscribe({
      next: (data: ReportModel[]) => {
        this.allReports = [...data];
        this.originalReports = [...data];

        this.reportTypes = Array.from(new Set(data.map(report => report.category))).sort();
        this.reportStatuses = Array.from(new Set(data.map(report => report.status))).sort();

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
  private getFilteredData(): ReportModel[] {
    let filtered = [...this.allReports];

    if (this.searchQuery.trim()) {
      const query = this.searchQuery.toLowerCase();
      filtered = filtered.filter(alert =>
        alert.title.toLowerCase().includes(query) ||
        alert.category.toLowerCase().includes(query) ||
        new Date(alert.date).toLocaleDateString().toLowerCase().includes(query)
      );
    }

    if (this.selectedType) {
      filtered = filtered.filter(alert => alert.category === this.selectedType);
    }

    if (this.selectedStatus) {
      filtered = filtered.filter(alert => alert.status === this.selectedStatus);
    }

    this.total = filtered.length;
    return filtered;
  }

  onClearSearch() {
    this.searchQuery = '';
    this.applyFilter();
  }

  applyFilter(): void {
    const filtered = this.getFilteredData();
    const start = this.pageIndex * this.pageSize;
    const end = start + this.pageSize;
    this.displayedReports = filtered.slice(start, end);
  }

  onPageChange(event: PageEvent): void {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.applyFilter();
  }

  resetFilters(): void {
    this.searchQuery = '';
    this.selectedType = null;
    this.selectedStatus = null;
    this.pageIndex = 0;
    this.allReports = [...this.originalReports];
    this.paginator.firstPage(); // reset paginator UI
    this.applyFilter();
  }

  filterByType(type: string): void {
    this.selectedType = type;
    this.pageIndex = 0;
    this.paginator.firstPage();
    this.applyFilter();
  }

  filterByStatus(type: string): void {
    this.selectedStatus = type;
    this.pageIndex = 0;
    this.paginator.firstPage();
    this.applyFilter();
  }

  sortByDate(): void {
    this.allReports = [...this.allReports].sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
    this.applyFilter();
  }

  sortByVessel(): void {
    this.allReports = [...this.allReports].sort((a, b) =>
      a.vessel_name.localeCompare(b.vessel_name)
    );
    this.applyFilter();
  }

  sortByLocation(): void {
    this.allReports = [...this.allReports].sort((a, b) =>
      a.location.localeCompare(b.location)
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
