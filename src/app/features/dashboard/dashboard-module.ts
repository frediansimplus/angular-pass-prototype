import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing-module';
import { DashboardOverview } from './components/dashboard-overview/dashboard-overview';
import { SharedModule } from '../../shared/shared-module';


@NgModule({
  declarations: [
    DashboardOverview
  ],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
