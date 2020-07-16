import { TestBed } from '@angular/core/testing';

import { DomaineInterventionService } from './domaine-intervention.service';

describe('DomaineInterventionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DomaineInterventionService = TestBed.get(DomaineInterventionService);
    expect(service).toBeTruthy();
  });
});
