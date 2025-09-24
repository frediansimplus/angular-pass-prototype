import { Component, OnInit } from '@angular/core';
import type { EChartsCoreOption } from 'echarts/core';
import { NgxEchartsDirective, ThemeOption } from 'ngx-echarts';
import { ReportService } from '../../../report/services/report';
import { ReportModel } from '../../../report/models/report';

@Component({
  selector: 'app-dashboard-overview',
  standalone: false,
  templateUrl: './dashboard-overview.html',
  styleUrls: ['./dashboard-overview.scss']
})
export class DashboardOverview implements OnInit {
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

  // Dummy stats
  nearMiss = { pending: 10, inProgress: 5, completed: 25 };
  nonCompliance = { pending: 8, inProgress: 3, completed: 36 };

  // ngx-echarts options
  chartOptions: any = {};
  selectedRange = 'This Month';

  constructor(private reportService: ReportService) {}

  ngOnInit() {
    this.initChart();
    this.loadReports();
  }

  theme!: string | ThemeOption;
  
  setRange(range: string) {
    this.selectedRange = range;
    // Later you can trigger reload of data based on range here
  }

  loadReports() {
    this.reportService.getReports().subscribe({
      next: (data: ReportModel[]) => {
        this.allReports = [...data];
        this.originalReports = [...data];

        this.reportTypes = Array.from(new Set(data.map(report => report.category))).sort();
        this.reportStatuses = Array.from(new Set(data.map(report => report.status))).sort();

        this.applyFilter();
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }

  /** Build chart options using the dummy numbers (you can replace with real numbers later) */
  initChart() {
    // Example distribution data (replace with real computed counts if available)
    const data = [
      { value: this.nearMiss.pending, name: 'Near-Miss Pending' },
      { value: this.nearMiss.inProgress, name: 'Near-Miss In Progress' },
      { value: this.nearMiss.completed, name: 'Near-Miss Completed' },
      { value: this.nonCompliance.pending, name: 'Non-Compliance Pending' },
      { value: this.nonCompliance.inProgress, name: 'Non-Compliance In Progress' },
      { value: this.nonCompliance.completed, name: 'Non-Compliance Completed' }
    ];

    this.chartOptions = {
      tooltip: {
        trigger: 'item',
      },
      series: [
        {
          name: 'Reports',
          type: 'pie',
          radius: '50%',
          center: ['50%', '50%'],
          selectedMode: 'single',
          data,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          },
        }
      ]
    };
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

    // Sort by date descending before slicing
    return filtered.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }

  onClearSearch() {
    this.searchQuery = '';
    this.applyFilter();
  }

  applyFilter(): void {
    const filtered = this.getFilteredData();
    // Take only the latest 3
    this.displayedReports = filtered.slice(0, 3);
  }

  resetFilters(): void {
    this.searchQuery = '';
    this.selectedType = null;
    this.selectedStatus = null;
    this.allReports = [...this.originalReports];
    this.applyFilter();
  }

  filterByType(type: string): void {
    this.selectedType = type;
    this.applyFilter();
  }

  filterByStatus(type: string): void {
    this.selectedStatus = type;
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
}
