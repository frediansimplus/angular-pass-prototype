import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoAlertEdit } from './memo-alert-edit';

describe('MemoAlertEdit', () => {
  let component: MemoAlertEdit;
  let fixture: ComponentFixture<MemoAlertEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MemoAlertEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemoAlertEdit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
