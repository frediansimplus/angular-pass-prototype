import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModule } from './features/dashboard/dashboard-module';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('../app/features/dashboard/dashboard-module').then(m => m.DashboardModule)
  },
  {
    path: 'report',
    loadChildren: () => import('../app/features/report/report-module').then(m => m.ReportModule)
  },
  {
    path: 'memo',
    loadChildren: () => import('../app/features/memo-alert/memo-alert-module').then(m => m.MemoAlertModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('../app/features/notification/notification-module').then(m => m.NotificationModule)
  },
  // {
  //   path: 'user',
  //   loadChildren: () => import('../app/features/user/user-module').then(m => m.UserModule)
  // },
  {
    path: 'setting',
    loadChildren: () => import('../app/features/setting/setting-module').then(m => m.SettingModule)
  },
  {
    path: 'login',
    loadChildren: () => import('../app/features/auth/auth-module').then(m => m.AuthModule)
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
