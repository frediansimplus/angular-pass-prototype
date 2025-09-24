import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideMomentDateAdapter } from '@angular/material-moment-adapter';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginator } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';

import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';

import {
  NgxMatDatepickerActions,
  NgxMatDatepickerApply,
  NgxMatDatepickerCancel,
  NgxMatDatepickerClear,
  NgxMatDatepickerInput,
  NgxMatDatepickerToggle,
  NgxMatDatepickerToggleIcon,
  NgxMatDatetimepicker,
} from '@ngxmc/datetime-picker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTimepickerModule } from '@angular/material/timepicker';


export const DATE_FORMATS = {
  parse: {
    dateInput: 'YYYY/MM/DD', // 'LL',
    // dateInput: "l, LTS",
    timeInput: 'HH:mm',
  },
  display: {
    // dateInput: "l, LTS",
    dateInput: 'DD MMM YYYY', // 'LL',
    // dateInput: 'DD MMM YYYY HH:mm', // 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'DD MMM YYYY', // 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
    timeInput: 'HH:mm', // Required for time input
    timeOptionLabel: 'HH:mm', // Required for time option label
  },
};


@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatStepperModule,
    MatCardModule,
    MatDatepickerModule,
    MatTimepickerModule,
    MatGridListModule,
    MatMenuModule,
    MatPaginator,
    MatCheckboxModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatChipsModule,


    NgxMatDatepickerToggleIcon,
    NgxMatDatepickerToggle,
    NgxMatDatepickerActions,
    NgxMatDatepickerApply,
    NgxMatDatepickerCancel,
    NgxMatDatepickerClear,
    NgxMatDatepickerInput,
    NgxMatDatetimepicker,
    NgxEchartsModule.forRoot({
      echarts
    }),
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatStepperModule,
    MatCardModule,
    MatDatepickerModule,
    MatTimepickerModule,
    MatGridListModule,
    MatMenuModule,
    MatPaginator,
    MatCheckboxModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatChipsModule,

    NgxMatDatepickerToggleIcon,
    NgxMatDatepickerToggle,
    NgxMatDatepickerActions,
    NgxMatDatepickerApply,
    NgxMatDatepickerCancel,
    NgxMatDatepickerClear,
    NgxMatDatepickerInput,
    NgxMatDatetimepicker,
    NgxEchartsModule
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } },
    provideMomentDateAdapter(DATE_FORMATS),
  ]
})
export class MaterialModule { }
