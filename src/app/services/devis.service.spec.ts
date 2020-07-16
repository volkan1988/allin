import { DevisService } from './devis.service';
import { TestBed } from '@angular/core/testing';

describe('DevisServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DevisService = TestBed.get(DevisService);
    expect(service).toBeTruthy();
  });
});
