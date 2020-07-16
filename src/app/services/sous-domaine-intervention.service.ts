import { DomaineInterventionService } from './domaine-intervention.service';
import { Injectable } from '@angular/core';
import { SousDomaineIntervention } from '../models/sous-domaine-intervention.model';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class SousDomaineInterventionService {

  sousDomaineIntervention: SousDomaineIntervention[];

  constructor(domaineInterventionService: DomaineInterventionService) {
    this.sousDomaineIntervention = [
      new SousDomaineIntervention("agrandissement-maison", "Agrandissement de maison", domaineInterventionService.getDomaineById("extension")),
      new SousDomaineIntervention("construction-garage", "Construction de garage", domaineInterventionService.getDomaineById("extension")),
      new SousDomaineIntervention("surelevation-maison", "Surélévation de maison", domaineInterventionService.getDomaineById("extension")),
      new SousDomaineIntervention("installation-chauffage", "Installation de chauffage", domaineInterventionService.getDomaineById("renovation-interieure")),
      new SousDomaineIntervention("placard-dressing-sur-mesure", "Placard et dressing sur mesure", domaineInterventionService.getDomaineById("renovation-interieure")),
      new SousDomaineIntervention("installation-electrique", "Installation électrique", domaineInterventionService.getDomaineById("renovation-interieure")),
      new SousDomaineIntervention("isolation-thermique-par-exterieur", "Isolation thérmique par l'exterieur", domaineInterventionService.getDomaineById("menuiserie-exterieure")),
      new SousDomaineIntervention("pose-cloture-portail", 'Pose de clôture et portail', domaineInterventionService.getDomaineById("menuiserie-exterieure")),
      new SousDomaineIntervention("pose-fenetre", 'Pose de fenêtre', domaineInterventionService.getDomaineById("menuiserie-exterieure")),
    ]
  }

  getSousDomaineById(id: string) {
    return this.sousDomaineIntervention.filter(
      x => x.id == id
    )[0];
  }
}
