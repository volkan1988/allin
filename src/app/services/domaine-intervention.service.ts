import { DomaineIntervention } from '../models/domaine-intervention.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DomaineInterventionService {

  subject = new Subject<DomaineIntervention[]>();

  private domainesIntervention: DomaineIntervention[] = [
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

  emitSubject() {
    this.subject.next(this.domainesIntervention.slice());
  }

  get(id: string): DomaineIntervention {
    return this.domainesIntervention.filter(
      x => x.id == id
    )[0];
  }

  update(domaineIntervention: DomaineIntervention) {
    let old = this.domainesIntervention.filter(
      x => x.id == domaineIntervention.id
    )[0];

    this.delete(old);
    this.create(domaineIntervention);
  }

  private delete(domaineIntervention: DomaineIntervention){
    const index = this.domainesIntervention.indexOf(domaineIntervention, 0);
    if (index > -1) {
      this.domainesIntervention.splice(index, 1);
    }

    this.emitSubject();
  }

  private create(domaineIntervention: DomaineIntervention){
    this.domainesIntervention.push(domaineIntervention);
    this.emitSubject();
  }
}
