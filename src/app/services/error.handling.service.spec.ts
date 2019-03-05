import { TestBed, inject } from '@angular/core/testing';

import { Error.HandlingService } from './error.handling.service';

describe('Error.HandlingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Error.HandlingService]
    });
  });

  it('should be created', inject([Error.HandlingService], (service: Error.HandlingService) => {
    expect(service).toBeTruthy();
  }));
});
