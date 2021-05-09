import { TestBed } from '@angular/core/testing';

import { KnhBleService } from './knh-ble.service';

describe('KnhBleService', () => {
  let service: KnhBleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KnhBleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
