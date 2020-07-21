import { DomaineIntervention } from '../models/domaine-intervention.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DomaineInterventionService {

  domainesIntervention: DomaineIntervention[] =  [
    new DomaineIntervention(
      'extension',
      'Extension',
      '../../../assets/images/renovation-interieure.jpg',),
    new DomaineIntervention(
      'renovation-interieure',
      'Rénovation intérieure',
      '../../../assets/images/renovation-interieure.jpg',),
    new DomaineIntervention(
      'menuiserie-exterieure',
      'Menuiserie extérieure',
      '../../../assets/images/menuiserie-exterieure.jpg',),
  ]
  
  getDomaineById(id: string) : DomaineIntervention {
    return this.domainesIntervention.filter(
      x => x.id == id
    )[0];
  }
}
