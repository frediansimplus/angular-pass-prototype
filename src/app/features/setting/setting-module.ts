import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingRoutingModule } from './setting-routing-module';
import { SettingList } from './components/setting-list/setting-list';
import { SharedModule } from '../../shared/shared-module';
import { MaintenanceMessage } from './components/maintenance-message/maintenance-message';
import { AutoApproval } from './components/auto-approval/auto-approval';


@NgModule({
  declarations: [
    SettingList,
    MaintenanceMessage,
    AutoApproval
  ],
  imports: [
    CommonModule,
    SharedModule,
    SettingRoutingModule
  ]
})
export class SettingModule { }
