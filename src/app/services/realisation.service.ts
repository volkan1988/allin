import { Injectable } from "@angular/core";
import { Realisation } from "../models/realisation.model";
import { SousDomaineInterventionService } from "./sous-domaine-intervention.service";
import { Subject } from "rxjs";

@Injectable()
export class RealisationService {

  realisationsSubject = new Subject<Realisation[]>();
  realisations: Realisation[];
  
  constructor(private sousDomaineInterventionService: SousDomaineInterventionService){
    this.realisations = [
      new Realisation(1,
        "Réalisation d’un enduit sur une extension à proximité de Villiers-sur-Mer dans le Calvados",
        "https://material.angular.io/assets/img/examples/shiba1.jpg",
        "",
        this.sousDomaineInterventionService.getSousDomaineById("isolation-thermique-par-exterieur"), //'menuiserie-exterieure'
        new Date()
      ),
      new Realisation(2,
        "Cuisine blanche et verte, réagencement et rénovation dans un appartement lyonnais, quartier Tête D'Or",
        "https://material.angular.io/assets/img/examples/shiba2.jpg",
        "",
        this.sousDomaineInterventionService.getSousDomaineById("installation-chauffage"), //'renovation-interieure'
        new Date()
      ),
      new Realisation(3,
        "Rénovation d'un Appartement Haussmannien - Lyon 6 - Secteur Edgar Quinet",
        "https://material.angular.io/assets/img/examples/shiba1.jpg",
        "",
        this.sousDomaineInterventionService.getSousDomaineById("placard-dressing-sur-mesure"), //'renovation-interieure'
        new Date()
      ),
      new Realisation(4,
        "Rénovation de maison individuelle à La Haye Fouassière (44)",
        "https://material.angular.io/assets/img/examples/shiba2.jpg",
        "",
        this.sousDomaineInterventionService.getSousDomaineById("installation-electrique"), //'renovation-interieure'
        new Date()
      ),
      new Realisation(5,
        "Rénovation de maison individuelle à La Haye Fouassière (44)",
        "https://material.angular.io/assets/img/examples/shiba1.jpg",
        "",
        this.sousDomaineInterventionService.getSousDomaineById("agrandissement-maison"), //'extension'
        new Date()
      )
    ];
  }

  emitRealisationsSubject() {
    this.realisationsSubject.next(this.realisations.slice());
  }

  getLastRealisations(nbOfRealisations: number): Realisation[] {
    return this.realisations.slice(0, nbOfRealisations);
  }

  getRealisationsBySousDomaine(sousDomaine: string): Realisation[] {
    return this.realisations.filter(
      x => x.sousDomaineIntervention.id == sousDomaine
    );
  }

}
