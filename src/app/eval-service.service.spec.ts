import { TestBed } from '@angular/core/testing';

import { EvalServiceService } from './eval-service.service';

describe('EvalServiceService', () => {
  let service: EvalServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EvalServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
