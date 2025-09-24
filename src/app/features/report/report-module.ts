import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing-module';
import { ReportList } from './components/report-list/report-list';
import { ReportCreate } from './components/report-create/report-create';
import { ReportEditComponent } from './components/report-edit/report-edit';
import { SharedModule } from '../../shared/shared-module';


@NgModule({
  declarations: [
    ReportList,
    ReportCreate,
    ReportEditComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReportRoutingModule,
]
})
export class ReportModule { }
