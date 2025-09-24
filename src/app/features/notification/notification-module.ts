import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationRoutingModule } from './notification-routing-module';
import { NotificationList } from './components/notification-list/notification-list';
import { NotificationListItem } from './components/notification-list-item/notification-list-item';
import { SharedModule } from '../../shared/shared-module';


@NgModule({
  declarations: [
    NotificationList,
    NotificationListItem
  ],
  imports: [
    CommonModule,
    SharedModule,
    NotificationRoutingModule
  ]
})
export class NotificationModule { }
