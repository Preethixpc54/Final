import { TestBed } from '@angular/core/testing';

import { LogonserviceTsService } from './logonservice.ts.service';

describe('LogonserviceTsService', () => {
  let service: LogonserviceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogonserviceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
