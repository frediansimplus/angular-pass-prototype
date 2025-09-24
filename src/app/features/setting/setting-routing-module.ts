import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingList } from './components/setting-list/setting-list';
import { MaintenanceMessage } from './components/maintenance-message/maintenance-message';
import { AutoApproval } from './components/auto-approval/auto-approval';

const routes: Routes = [
  { path: '', component: SettingList, canActivate:[] },
  { path: 'maintenance-message', component: MaintenanceMessage },
  { path: 'auto-approval', component: AutoApproval },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
