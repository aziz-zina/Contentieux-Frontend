import { TestBed } from '@angular/core/testing';

import { FraisService } from './frais.service';

describe('FraisService', () => {
  let service: FraisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FraisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
