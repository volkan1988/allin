import { DomaineIntervention } from '../models/domaine-intervention.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DomaineInterventionService {

  domainesIntervention: DomaineIntervention[] =  [
    new DomaineIntervention("extension",'Extension'),
    new DomaineIntervention("renovation-interieure",'Rénovation intérieure'),
    new DomaineIntervention("menuiserie-exterieure",'Menuiserie extérieure'),
  ]
  
  getDomaineById(id: string) : DomaineIntervention {
    return this.domainesIntervention.filter(
      x => x.id == id
    )[0];
  }
}
