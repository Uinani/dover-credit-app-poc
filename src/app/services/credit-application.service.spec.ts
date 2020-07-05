import { TestBed } from '@angular/core/testing';

import { CreditApplicationService } from './credit-application.service';

describe('CreditApplicationService', () => {
  let service: CreditApplicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreditApplicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
