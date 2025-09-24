import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationListItem } from './notification-list-item';

describe('NotificationListItem', () => {
  let component: NotificationListItem;
  let fixture: ComponentFixture<NotificationListItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotificationListItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationListItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
