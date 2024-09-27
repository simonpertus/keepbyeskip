import { TestBed } from '@angular/core/testing';

import { TwistService } from './twist.service';

describe('TwistService', () => {
  let service: TwistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
