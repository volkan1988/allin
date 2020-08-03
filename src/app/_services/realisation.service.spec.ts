import { TestBed } from '@angular/core/testing';

import { RealisationService } from './realisation.service';

describe('RealisationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RealisationService = TestBed.get(RealisationService);
    expect(service).toBeTruthy();
  });
});
