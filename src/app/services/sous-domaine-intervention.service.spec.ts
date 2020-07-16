import { TestBed } from '@angular/core/testing';

import { SousDomaineInterventionService } from './sous-domaine-intervention.service';

describe('SousDomaineInterventionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SousDomaineInterventionService = TestBed.get(SousDomaineInterventionService);
    expect(service).toBeTruthy();
  });
});
