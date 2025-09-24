import { TestBed } from '@angular/core/testing';

import { Dashboard } from './dashboard';
import { HttpClientTestingModule, HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { DashboardData } from '../models/dashboard';

describe('Dashboard', () => {
  let service: Dashboard;
  let httpTestingController: HttpTestingController;

  const mockData: DashboardData = { // Moved mock data here for consistency
    totalUsers: 100,
    activeSessions: 50,
    lastUpdate: new Date('2025-01-01T10:00:00Z'),
    recentActivities: []
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        Dashboard,
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(Dashboard);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify(); // Ensure that there are no outstanding requests
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return mock dashboard data', (done) => {
    // Since getDashboardData currently uses 'of' with delay, we'll test the observable directly
    service.getDashboardData().subscribe(data => {
      // Note: the mockData in the service's `getDashboardData` has specific values.
      // Adjust this expectation to match the actual mock data from the service.
      expect(data.totalUsers).toEqual(12345);
      expect(data.activeSessions).toEqual(789);
      expect(data.recentActivities.length).toEqual(3);
      done();
    });
    // No httpTestingController.expectOne because the current implementation uses `of(mockData)`
  });

  // Example of how to test if it *were* making an HTTP request
  /*
  it('should fetch dashboard data via HTTP GET', (done) => {
    service.getDashboardData().subscribe(data => {
      expect(data).toEqual(mockData);
      done();
    });

    const req = httpTestingController.expectOne(`${environment.apiUrl}/dashboard`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockData);
  });
  */

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Dashboard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
