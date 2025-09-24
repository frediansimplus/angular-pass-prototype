import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemoAlertList } from './components/memo-alert-list/memo-alert-list';

const routes: Routes = [
  { path: '', component: MemoAlertList, canActivate:[] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemoAlertRoutingModule { }
