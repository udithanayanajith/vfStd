import { TestBed } from '@angular/core/testing';

import { PredResultsService } from './pred-results.service';

describe('PredResultsService', () => {
  let service: PredResultsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PredResultsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
