import { Component, EventEmitter, inject, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Subject } from 'rxjs';
import { MemoAlertCreateModel, ReminderIntervalModel } from '../../models/memo-alert';

@Component({
  selector: 'app-memo-alert-create',
  standalone: false,
  templateUrl: './memo-alert-create.html',
  styleUrl: './memo-alert-create.scss'
})
export class MemoAlertCreate implements OnInit {
  @ViewChild('stepper') stepper!: MatStepper;
  @Output() closeEvent = new EventEmitter();

  private isDestroy$: Subject<void> = new Subject<void>();
  private _formBuilder = inject(FormBuilder);

  memoAlertCreateData = <MemoAlertCreateModel>{
    action: 'Create',
    date: new Date(),
    dateStr: new Date().toDateString(),
    title: '',
    category: '',
    description: '',
    effectiveDate: new Date(),
    effectiveDateStr: new Date().toDateString(),
    isRequiredAck: true,
    reminderConfig: <ReminderIntervalModel> {}
  };

  readonly dateCtrl = new FormControl(this.memoAlertCreateData.date, []);
  readonly titleCtrl = new FormControl(this.memoAlertCreateData.title, []);
  readonly categoryCtrl = new FormControl(this.memoAlertCreateData.category, []);
  readonly descriptionCtrl = new FormControl(this.memoAlertCreateData.description, []);
  readonly effectiveDateCtrl = new FormControl(this.memoAlertCreateData.effectiveDate, []);

  detailFormGroup = this._formBuilder.group({
    dateCtrl: this.dateCtrl,
    titleCtrl: this.titleCtrl,
    categoryCtrl: this.categoryCtrl,
    descriptionCtrl: this.descriptionCtrl,
    effectiveDateCtrl: this.effectiveDateCtrl,
  });

  ngOnInit(): void {
    
  }

  onCloseDialog() {
    this.closeEvent.emit();
  }

  onGoNext() {
    this.stepper.next();
  }

  onGoBack() {
    this.stepper.previous();
  }

  onConfirmation() {
    this.onCloseDialog();
  }
}
