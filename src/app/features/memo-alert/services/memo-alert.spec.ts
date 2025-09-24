import { TestBed } from '@angular/core/testing';

import { MemoAlert } from './memo-alert';

describe('MemoAlert', () => {
  let service: MemoAlert;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemoAlert);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
