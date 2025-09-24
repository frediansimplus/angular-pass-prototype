import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoAlertListItem } from './memo-alert-list-item';

describe('MemoAlertListItem', () => {
  let component: MemoAlertListItem;
  let fixture: ComponentFixture<MemoAlertListItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MemoAlertListItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemoAlertListItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
