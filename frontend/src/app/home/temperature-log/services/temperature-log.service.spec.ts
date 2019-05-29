import { TestBed } from '@angular/core/testing';

import { TemperatureLogService } from './temperature-log.service';

describe('TemperatureLogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TemperatureLogService = TestBed.get(TemperatureLogService);
    expect(service).toBeTruthy();
  });
});
