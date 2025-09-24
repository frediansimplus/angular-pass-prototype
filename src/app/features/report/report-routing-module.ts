import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportList } from './components/report-list/report-list';

const routes: Routes = [
  { path: '', component: ReportList, canActivate:[] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
