import { TestBed } from '@angular/core/testing';

import { FakeServiceService } from './fake-service.service';

describe('FakeServiceService', () => {
  let service: FakeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
