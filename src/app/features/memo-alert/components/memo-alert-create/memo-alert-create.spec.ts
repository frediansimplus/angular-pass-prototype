import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoAlertCreate } from './memo-alert-create';

describe('MemoAlertCreate', () => {
  let component: MemoAlertCreate;
  let fixture: ComponentFixture<MemoAlertCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MemoAlertCreate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemoAlertCreate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
