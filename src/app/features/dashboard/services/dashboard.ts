import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { DashboardData } from '../models/dashboard';

@Injectable({
  providedIn: 'root'
})
export class Dashboard {
  
  constructor(private http: HttpClient) {}

  /**
   * Fetches dashboard data from an API.
   * For demonstration, it returns mock data.
   */
  getDashboardData(): Observable<DashboardData> {
    // In a real app, this would be an HTTP GET request
    // return this.http.get<DashboardData>(`${environment.apiUrl}/dashboard`);

    // Mock data for demonstration
    const mockData: DashboardData = {
      totalUsers: 12345,
      activeSessions: 789,
      lastUpdate: new Date(2025, 7, 24, 15, 30), // August 24, 2025
      recentActivities: [
        { user: 'alice', action: 'logged in', timestamp: new Date(2025, 7, 25, 9, 0) },
        { user: 'bob', action: 'updated profile', timestamp: new Date(2025, 7, 25, 10, 15) },
        { user: 'charlie', action: 'viewed report', timestamp: new Date(2025, 7, 25, 11, 45) },
      ]
    };
    return of(mockData).pipe(delay(1000)); // Simulate network delay
  }
}
