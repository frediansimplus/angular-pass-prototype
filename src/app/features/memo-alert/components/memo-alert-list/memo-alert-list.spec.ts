import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoAlertList } from './memo-alert-list';

describe('MemoAlertList', () => {
  let component: MemoAlertList;
  let fixture: ComponentFixture<MemoAlertList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MemoAlertList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemoAlertList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
