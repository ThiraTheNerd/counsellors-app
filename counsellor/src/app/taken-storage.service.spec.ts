import { TestBed } from '@angular/core/testing';

import { TakenStorageService } from './taken-storage.service';

describe('TakenStorageService', () => {
  let service: TakenStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TakenStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
