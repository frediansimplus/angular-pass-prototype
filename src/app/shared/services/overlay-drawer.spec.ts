import { TestBed } from '@angular/core/testing';

import { OverlayDrawer } from './overlay-drawer';

describe('OverlayDrawer', () => {
  let service: OverlayDrawer;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OverlayDrawer);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
