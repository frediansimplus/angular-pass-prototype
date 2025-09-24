import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { NotificationService } from '../../services/notification';
import { merge, of as observableOf } from 'rxjs';
import { startWith, switchMap, map, catchError } from 'rxjs/operators';
import { Notification } from '../../models/notification';

@Component({
  selector: 'app-notification-list',
  standalone: false,
  templateUrl: './notification-list.html',
  styleUrl: './notification-list.scss'
})
export class NotificationList implements AfterViewInit {
  @ViewChild('dynamicContentTemplate') dynamicContentTemplate!: TemplateRef<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  // notifications$!: Observable<Notification[]>;
  // isLoading = true;

  // constructor(private notificationService: NotificationService) {}

  // ngOnInit(): void {
  //   this.notifications$ = this.notificationService.getNotifications();
  // }
  notifications: Notification[] = [];
  isLoading = true;
  total = 0;

  pageSize = 10;
  pageSizeOptions = [5, 10, 20];

  constructor(private notificationService: NotificationService) { }

  ngAfterViewInit(): void {
    // Trigger data load on paginator changes
    setTimeout(() => {
      merge(this.paginator.page)
        .pipe(
          startWith({}),
          switchMap(() => {
            this.isLoading = true;
            // If API supports pagination, call with params:
            // return this.notificationService.getNotifications(this.paginator.pageIndex, this.paginator.pageSize);
            return this.notificationService.getNotifications();
          }),
          map((data: Notification[]) => {
            this.isLoading = false;
            this.total = data.length; // Replace with `data.total` if API returns total count
            const start = this.paginator.pageIndex * this.paginator.pageSize;
            return data.slice(start, start + this.paginator.pageSize);
          }),
          catchError(() => {
            this.isLoading = false;
            return observableOf([]);
          })
        )
        .subscribe((data) => (this.notifications = data));
    }, 0);
  }

}
