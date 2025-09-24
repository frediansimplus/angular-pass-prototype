import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceMessage } from './maintenance-message';

describe('MaintenanceMessage', () => {
  let component: MaintenanceMessage;
  let fixture: ComponentFixture<MaintenanceMessage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaintenanceMessage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintenanceMessage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
