import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { MemoAlertModel } from '../models/memo-alert';

@Injectable({
  providedIn: 'root'
})
export class MemoAlertService {
  private readonly LOCALSTORAGE_KEY = 'memoAlerts';
  private readonly JSON_URL = 'json/memo-alerts.json';

  constructor(private http: HttpClient) {}

  /**
   * Force refresh from JSON file (ignore localStorage).
   */
  refreshMemoAlerts(): Observable<MemoAlertModel[]> {
    return this.http.get<MemoAlertModel[]>(this.JSON_URL).pipe(
      map(memoAlerts =>
        memoAlerts.map(r => ({
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
   * Fetch all memo alerts.
   * - If data exists in localStorage → use it.
   * - Else → fetch from JSON and store in localStorage.
   */
  getMemoAlerts(): Observable<MemoAlertModel[]> {
    this.refreshMemoAlerts();
    const cached = localStorage.getItem(this.LOCALSTORAGE_KEY);

    if (cached) {
      const data: MemoAlertModel[] = JSON.parse(cached).map((item: any) => ({
        ...item,
        date: new Date(item.date)
      }));
      return of(data);
    }

    return this.http.get<MemoAlertModel[]>(this.JSON_URL).pipe(
      tap(data => {
        localStorage.setItem(this.LOCALSTORAGE_KEY, JSON.stringify(data));
      })
    );
  }

  /**
   * Fetch a single memo alert by its ID.
   */
  getMemoAlertById(id: string): Observable<MemoAlertModel | undefined> {
    return this.getMemoAlerts().pipe(
      map(memoAlerts => memoAlerts.find(n => n.id === id))
    );
  }
}
