import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoApproval } from './auto-approval';

describe('AutoApproval', () => {
  let component: AutoApproval;
  let fixture: ComponentFixture<AutoApproval>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AutoApproval]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoApproval);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
