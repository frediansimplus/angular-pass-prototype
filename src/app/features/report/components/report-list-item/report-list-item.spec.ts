import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportListItem } from './report-list-item';

describe('ReportListItem', () => {
  let component: ReportListItem;
  let fixture: ComponentFixture<ReportListItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReportListItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportListItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
