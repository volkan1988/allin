import { DomaineInterventionService } from './domaine-intervention.service';
import { Injectable } from '@angular/core';
import { SousDomaineIntervention } from '../models/sous-domaine-intervention.model';

@Injectable()
export class SousDomaineInterventionService {

  sousDomaineIntervention: SousDomaineIntervention[];

  constructor(domaineInterventionService: DomaineInterventionService) {
    this.sousDomaineIntervention = [
      new SousDomaineIntervention(
        'agrandissement-maison',
        'Agrandissement de maison',
        "Gagnez des mètres carrés, pensez à l'agrandissement de maison ! Nous avons les artisans qu'il vous faut ! Conseils personnalisés, devis gratuits.",
        '../../../assets/images/renovation-interieure.jpg',
        domaineInterventionService.getDomaineById('extension')),
      new SousDomaineIntervention(
        'construction-garage',
        'Construction de garage',
        "Pour garer et protéger votre voiture, faites construire un garage ! Nous avons les pros qu'il vous faut. Conseils personnalisés, devis gratuits.",
        '../../../assets/images/renovation-interieure.jpg',
        domaineInterventionService.getDomaineById('extension')),
      new SousDomaineIntervention(
        'construction-veranda',
        'Construction de véranda',
        "Une nouvelle pièce à vivre, tout en profitant de la luminosité extérieure, c'est possible grâce à la véranda ! Conseils personnalisés, devis gratuits.",
        '../../../assets/images/renovation-interieure.jpg',
        domaineInterventionService.getDomaineById('extension')),
      new SousDomaineIntervention(
        'etension-bois',
        'Extension Bois',
        "L'extension à ossature bois est une solution durable, économique et esthétique pour gagner de l'espace chez soi. Conseils personnalisés, devis gratuits.",
        '../../../assets/images/renovation-interieure.jpg',
        domaineInterventionService.getDomaineById('extension')),
      new SousDomaineIntervention(
        'souplex',
        'Souplex',
        "Pour gagner de la place chez vous, aménagez votre sous-sol façon souplex ! Nous avons les pros qu'il vous faut. Conseils personnalisés, devis gratuits.",
        '../../../assets/images/renovation-interieure.jpg',
        domaineInterventionService.getDomaineById('extension')),
      new SousDomaineIntervention(
        'surelevation-maison',
        'Surélévation de maison',
        "Prenez de la hauteur ! Ajoutez un nouvel étage à votre maison avec une surélévation et gagnez en espace habitable. Conseils personnalisés, devis gratuits.",
        '../../../assets/images/renovation-interieure.jpg',
        domaineInterventionService.getDomaineById('extension')),
      new SousDomaineIntervention(
        'installation-chauffage',
        'Installation de chauffage',
        "Un meilleur confort et des factures allégées grâce à un système de chauffage adapté et performant. Conseils personnalisés et devis gratuits.",
        '../../../assets/images/renovation-interieure.jpg',
        domaineInterventionService.getDomaineById('renovation-interieure')),
      new SousDomaineIntervention(
        'placard-dressing-sur-mesure',
        'Placard et dressing sur mesure',
        "Besoin d'un menuisier pour installer un placard ou un dressing sur mesure ? Nous avons les artisans qu'il vous faut. Conseils personnalisés, devis gratuits.",
        '../../../assets/images/renovation-interieure.jpg',
        domaineInterventionService.getDomaineById('renovation-interieure')),
      new SousDomaineIntervention(
        'installation-electrique',
        'Installation électrique',
        "Remise aux normes, rénovation des installations électriques, domotique, nous avons les artisans qu'il vous faut. Conseils personnalisés et devis gratuits.",
        '../../../assets/images/renovation-interieure.jpg',
        domaineInterventionService.getDomaineById('renovation-interieure')),
      new SousDomaineIntervention(
        'isolation-thermique-par-exterieur',
        'Isolation thérmique par l\'exterieur',
        "Isolez votre habitation par l'extérieur avec l'aide d'un professionnel, pour un meilleur confort au quotidien et des économies sur votre facture !",
        '../../../assets/images/renovation-interieure.jpg',
        domaineInterventionService.getDomaineById('menuiserie-exterieure')),
      new SousDomaineIntervention(
        'pose-cloture-portail',
        'Pose de clôture et portail',
        "Envie d'installer ou de changer de clôture et de portail, nous avons les artisans qu'il vous faut ! Conseils personnalisés et devis gratuits.",
        '../../../assets/images/renovation-interieure.jpg',
        domaineInterventionService.getDomaineById('menuiserie-exterieure')),
      new SousDomaineIntervention(
        'pose-fenetre',
        'Pose de fenêtre',
        "Changez vos portes pour plus de sécurité et vos fenêtres pour plus de lumière et une meilleure isolation. Conseils personnalisés et devis gratuits.",
        '../../../assets/images/renovation-interieure.jpg',
        domaineInterventionService.getDomaineById('menuiserie-exterieure'))
    ];
  }

  getSousDomaineById(id: string): SousDomaineIntervention {
    return this.sousDomaineIntervention.filter(
      x => x.id == id
    )[0];
  }

  getSousDomaineByDomaineId(id: string): SousDomaineIntervention[] {
    return this.sousDomaineIntervention.filter(
      x => x.domaineIntervention.id == id
    );
  }
}
