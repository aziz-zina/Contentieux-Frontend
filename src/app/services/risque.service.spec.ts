import { TestBed } from '@angular/core/testing';

import { RisqueService } from './risque.service';

describe('RisqueService', () => {
  let service: RisqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RisqueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
