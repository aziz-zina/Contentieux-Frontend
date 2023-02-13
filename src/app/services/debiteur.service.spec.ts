import { TestBed } from '@angular/core/testing';

import { DebiteurService } from './debiteur.service';

describe('DebiteurService', () => {
  let service: DebiteurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DebiteurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
