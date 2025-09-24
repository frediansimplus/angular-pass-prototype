import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportEditComponent } from './report-edit';

describe('ReportEdit', () => {
  let component: ReportEditComponent;
  let fixture: ComponentFixture<ReportEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReportEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
