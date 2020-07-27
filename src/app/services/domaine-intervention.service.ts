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
      "Agrandissement de maison traditionnelle, en bois, surélévation, création de véranda, garage, souplex, agrandissement de la surface habitable…",
      '../../../assets/images/renovation-interieure.jpg',
      'blue'),
    new DomaineIntervention(
      'renovation-interieure',
      'Rénovation intérieure',
      "Rénovation de maison et d’appartement, travaux d’aménagement de combles, optimisation de l’isolation, rénovation de salle de bain, de cuisine, pose de parquet, carrelage, peinture…",
      '../../../assets/images/renovation-interieure.jpg',
      'yellow'),
    new DomaineIntervention(
      'menuiserie-exterieure',
      'Menuiserie extérieure',
      "Ravalement de façade, isolation thermique par l’extérieur, travaux de maçonnerie, charpente, toiture, création de terrasse, piscine, aménagement de jardin, allées, clôtures…",
      '../../../assets/images/menuiserie-exterieure.jpg',
      'pink'),
  ]
  
  getDomaineById(id: string) : DomaineIntervention {
    return this.domainesIntervention.filter(
      x => x.id == id
    )[0];
  }

}
