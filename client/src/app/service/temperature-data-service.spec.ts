import { TestBed } from '@angular/core/testing';

import { TemperatureDataService } from './temperature-data-service.service';

describe('TemperatureDataServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TemperatureDataService = TestBed.get(TemperatureDataService);
    expect(service).toBeTruthy();
  });
});
