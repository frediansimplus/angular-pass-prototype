import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemoAlertRoutingModule } from './memo-alert-routing-module';
import { MemoAlertList } from './components/memo-alert-list/memo-alert-list';
import { MemoAlertCreate } from './components/memo-alert-create/memo-alert-create';
import { MemoAlertEdit } from './components/memo-alert-edit/memo-alert-edit';
import { MemoAlertListItem } from './components/memo-alert-list-item/memo-alert-list-item';
import { SharedModule } from '../../shared/shared-module';


@NgModule({
  declarations: [
    MemoAlertList,
    MemoAlertCreate,
    MemoAlertEdit
  ],
  imports: [
    CommonModule,
    SharedModule,
    MemoAlertRoutingModule
  ]
})
export class MemoAlertModule { }
