import { Component, ElementRef, EventEmitter, inject, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Subject, takeUntil } from 'rxjs';
import { ReportCategoryModel, ReportCreateModel, ReportType } from '../../models/report';
import { Vessel } from '../../../../shared/models/vessel';
import { Location } from '../../../../shared/models/location';
import { DateFormatter } from '../../../../shared/helpers/date-formatter';
import { TextFormatter } from '../../../../shared/helpers/text-formatter';
import { Media } from '../../../../shared/models/media';

@Component({
  selector: 'app-report-create',
  standalone: false,
  templateUrl: './report-create.html',
  styleUrl: './report-create.scss'
})
export class ReportCreate implements OnInit {
  @Output() closeEvent = new EventEmitter();
  @ViewChild('stepper') stepper!: MatStepper;
  @ViewChild('pictureInput') pictureInput!: ElementRef;
  @ViewChild('videoInput') videoInput!: ElementRef;


  private isDestroy$: Subject<void> = new Subject<void>();
  private _formBuilder = inject(FormBuilder);

  reportTypeData: ReportType[] = [
    "Near-Miss",
    "Non-Compliance"
  ]

  reportCreateData = <ReportCreateModel>{
    action: 'Create',
    type: 'None',
    date: new Date(),
    dateStr: new Date().toString(),
    vessel: <Vessel>{
      name: ''
    },
    title: '',
    category: <ReportCategoryModel>{
      label: '',
      value: ''
    },
    location: <Location>{
      value: ''
    },
    description: '',
    occurredDate: new Date(),
    occurredDateStr: new Date().toString(),
    pictures: [],
    videos: []
  };

  // readonly typeCtrl = new FormControl(this.reportCreateData.type, [Validators.required]);
  readonly typeCtrl = new FormControl(this.reportCreateData.type, []);
  readonly dateCtrl = new FormControl(this.reportCreateData.date, []);
  readonly vesselNameCtrl = new FormControl(this.reportCreateData.vessel.name, []);
  readonly titleCtrl = new FormControl(this.reportCreateData.title, []);
  readonly categoryCtrl = new FormControl(this.reportCreateData.category.value, []);
  readonly occurredDateCtrl = new FormControl(this.reportCreateData.occurredDate, []);
  readonly locationCtrl = new FormControl(this.reportCreateData.location.value, []);
  readonly descriptionCtrl = new FormControl(this.reportCreateData.description, []);

  detailFormGroup = this._formBuilder.group({
    typeCtrl: this.typeCtrl,
    dateCtrl: this.dateCtrl,
    vesselNameCtrl: this.vesselNameCtrl,
    titleCtrl: this.titleCtrl,
    categoryCtrl: this.categoryCtrl,
    occurredDateCtrl: this.occurredDateCtrl,
    locationCtrl: this.locationCtrl,
    descriptionCtrl: this.descriptionCtrl,
  });

  ngOnInit(): void {

  }

  constructor() {
    this.bindingFormControl();
  }


  bindingFormControl() {
    this.dateCtrl.valueChanges
      .pipe(takeUntil(this.isDestroy$))
      .subscribe(newValue => {
        // console.log('** dateCtrl value changes: ', newValue);
        const date = newValue ?? new Date();
        this.reportCreateData.date = date;
        this.reportCreateData.dateStr = DateFormatter.formatDateDMY(date);
      });

    this.vesselNameCtrl.valueChanges
      .pipe(takeUntil(this.isDestroy$))
      .subscribe(newValue => {
        // console.log('** vesselNameCtrl value changes: ', newValue);
        const vessel = TextFormatter.formatTitleCase(newValue ?? '');
        this.reportCreateData.vessel.name = vessel;
        this.reportCreateData.vessel.mmsi = 1234;
      });


    this.titleCtrl.valueChanges
      .pipe(takeUntil(this.isDestroy$))
      .subscribe(newValue => {
        // console.log('** titleCtrl value changes: ', newValue);
        const title = TextFormatter.formatTitleCase(newValue ?? '');
        this.reportCreateData.title = title;
      });

    this.categoryCtrl.valueChanges
      .pipe(takeUntil(this.isDestroy$))
      .subscribe(newValue => {
        // console.log('** categoryCtrl value changes: ', newValue);
        const category = TextFormatter.formatTitleCase(newValue ?? '');
        this.reportCreateData.category.value = category;
      });

    this.occurredDateCtrl.valueChanges
      .pipe(takeUntil(this.isDestroy$))
      .subscribe(newValue => {
        // console.log('** occurredDateCtrl value changes: ', newValue);
        const date = newValue ?? new Date();
        this.reportCreateData.occurredDate = date;
        this.reportCreateData.occurredDateStr = DateFormatter.formatDateDMY(date);
      });

    this.locationCtrl.valueChanges
      .pipe(takeUntil(this.isDestroy$))
      .subscribe(newValue => {
        // console.log('** locationCtrl value changes: ', newValue);
        const location = (newValue ?? '').toUpperCase();
        this.reportCreateData.location.value = location;
      });

    this.descriptionCtrl.valueChanges
      .pipe(takeUntil(this.isDestroy$))
      .subscribe(newValue => {
        // console.log('** descriptionCtrl value changes: ', newValue);
        const description = newValue ?? '';
        this.reportCreateData.description = description;
      });
  }

  isSelectedType(type: ReportType) {
    if (this.reportCreateData.type === type) {
      return true;
    }

    return false;
  }

  onCloseDialog() {
    this.closeEvent.emit();
  }

  onSelectedItem(type: ReportType) {
    this.reportCreateData.type = type;
  }

  onSelectPicture() {
    this.pictureInput.nativeElement.click();
  }

  onSelectVideo() {
    this.videoInput.nativeElement.click();
  }


  onPictureSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.readImage(file);
    }
  }

  private readImage(file: File): void {
    const reader = new FileReader();

    // Set up the onload event handler
    reader.onload = (e: any) => {
      // The result property contains the Base64-encoded string
      const base64Image = e.target.result;

      // You can now assign this string to an image element's src
      // For example, store it in a component property
      const picture: Media = {
        filename: file.name,
        type: file.type,
        id: 0,
        value: file,
        base64: base64Image
      }

      this.reportCreateData.pictures.push(picture);
    };

    // Start reading the file
    reader.readAsDataURL(file);
  }

  // onDeletePicture(picture: Media) {
  //   if (this.reportCreateData.pictures.length > 0) {
  //     const updatedMedias = this.reportCreateData.pictures.filter(media => media.filename !== picture.filename);

  //     this.reportCreateData.pictures = {... updatedMedias};
  //   }
  // }

  onDeletePicture(index: number) {
    console.log('*** delete video: ', index, this.reportCreateData.pictures);
    if (this.reportCreateData.pictures.length > 0) {
      this.reportCreateData.pictures.splice(index, 1);
    }
    
    console.log('*** deleted video: ', this.reportCreateData.pictures);
  }

  onVideoSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const videoFile = input.files[0];
      this.readVideo(videoFile);
    }
  }
  
  private readVideo(file: File): void {
    const reader = new FileReader();

    // The onload event is triggered when the file has been successfully read
    reader.onload = (e: any) => {
      // e.target.result contains the Base64 data URL
      const base64Video = e.target.result;

      const picture: Media = {
        filename: file.name,
        type: file.type,
        id: 0,
        value: file,
        base64: base64Video
      }

      this.reportCreateData.videos.push(picture);
    };

    // Start reading the file as a data URL
    reader.readAsDataURL(file);
  }

  // onDeleteVideo(video: Media) {
  //   console.log('*** delete video: ', video);
  //   if (this.reportCreateData.videos.length > 0) {
  //     const updatedMedias = this.reportCreateData.videos.filter(media => media.filename !== video.filename);

  //     this.reportCreateData.videos = {... updatedMedias};
  //   }
  // }

  onDeleteVideo(index: number) {
    console.log('*** delete video: ', index, this.reportCreateData.videos);
    if (this.reportCreateData.videos.length > 0) {
      this.reportCreateData.videos.splice(index, 1);
    }
    
    console.log('*** deleted video: ', this.reportCreateData.videos);
  }

  onSaveToDraft() {

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
