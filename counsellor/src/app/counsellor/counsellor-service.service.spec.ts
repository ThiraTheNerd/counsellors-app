import { TestBed } from '@angular/core/testing';

import { CounsellorServiceService } from './counsellor-service.service';

describe('CounsellorServiceService', () => {
  let service: CounsellorServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CounsellorServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
