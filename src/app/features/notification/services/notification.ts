import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { Notification } from '../models/notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private readonly STORAGE_KEY = 'notifications_cache';
  private readonly JSON_URL = 'json/notifications.json';

  constructor(private http: HttpClient) {}

  /**
   * Fetch all notifications (cached in localStorage).
   */
  getNotifications(): Observable<Notification[]> {
    this.refreshNotifications();
    const cached = localStorage.getItem(this.STORAGE_KEY);
    if (cached) {
      return of(JSON.parse(cached));
    }

    return this.http.get<Notification[]>(this.JSON_URL).pipe(
      map(notifs =>
        notifs.map(n => ({
          ...n,
          date: new Date(n.date) // restore Date object
        }))
      ),
      tap(data => {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
      })
    );
  }

  /**
   * Get single notification by ID.
   */
  getNotificationById(id: string): Observable<Notification | undefined> {
    return this.getNotifications().pipe(
      map(notifs => notifs.find(n => n.id === id))
    );
  }

  /**
   * Force refresh from JSON file (ignore localStorage).
   */
  refreshNotifications(): Observable<Notification[]> {
    return this.http.get<Notification[]>(this.JSON_URL).pipe(
      map(notifs =>
        notifs.map(n => ({
          ...n,
          date: new Date(n.date)
        }))
      ),
      tap(data => {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
      })
    );
  }
}
