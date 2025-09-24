/**
 * Interface for a single dashboard activity entry.
 */
export interface Activity {
  user: string;
  action: string;
  timestamp: Date;
}

/**
 * Interface representing the overall dashboard data.
 */
export interface DashboardData {
  totalUsers: number;
  activeSessions: number;
  lastUpdate: Date;
  recentActivities: Activity[];
}