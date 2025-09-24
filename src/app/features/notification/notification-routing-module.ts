import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotificationList } from './components/notification-list/notification-list';

const routes: Routes = [
  { path: '', component: NotificationList, canActivate:[] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationRoutingModule { }
