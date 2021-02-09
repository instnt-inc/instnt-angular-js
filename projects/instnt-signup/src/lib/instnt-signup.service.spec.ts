import { TestBed } from '@angular/core/testing';

import { InstntSignupService } from './instnt-signup.service';

describe('InstntSignupService', () => {
  let service: InstntSignupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstntSignupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
