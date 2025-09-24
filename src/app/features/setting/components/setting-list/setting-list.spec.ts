import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingList } from './setting-list';

describe('SettingList', () => {
  let component: SettingList;
  let fixture: ComponentFixture<SettingList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SettingList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
