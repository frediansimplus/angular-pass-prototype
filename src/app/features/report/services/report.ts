import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { ReportModel } from '../models/report';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private LOCALSTORAGE_KEY = 'reports';
  private readonly JSON_URL = 'json/reports.json';
  
  constructor(private http: HttpClient) {}

  /**
   * Force refresh from JSON file (ignore localStorage).
   */
  refreshReports(): Observable<ReportModel[]> {
    return this.http.get<ReportModel[]>(this.JSON_URL).pipe(
      map(reports =>
        reports.map(r => ({
          ...r,
          date: new Date(r.date)
        }))
      ),
      tap(data => {
        localStorage.setItem(this.LOCALSTORAGE_KEY, JSON.stringify(data));
      })
    );
  }
  
  /**
   * Fetch all reports.
   * - If data exists in localStorage → use it.
   * - Else → fetch from JSON and store in localStorage.
   */
  getReports(): Observable<ReportModel[]> {
    this.refreshReports();
    const cached = localStorage.getItem(this.LOCALSTORAGE_KEY);

    if (cached) {
      const data: ReportModel[] = JSON.parse(cached).map((item: any) => ({
        ...item,
        date: new Date(item.date)
      }));
      return of(data);
    }

    return this.http.get<ReportModel[]>(this.JSON_URL).pipe(
      tap(data => {
        localStorage.setItem(this.LOCALSTORAGE_KEY, JSON.stringify(data));
      })
    );
  }

  /**
   * Fetch a single report by its ID.
   */
  getReportById(id: string): Observable<ReportModel | undefined> {
    return this.getReports().pipe(
      map(reports => reports.find(n => n.id === id))
    );
  }
}
