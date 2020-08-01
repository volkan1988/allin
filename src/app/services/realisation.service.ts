import { Injectable } from "@angular/core";
import { Realisation } from "../models/realisation.model";
import { SousDomaineInterventionService } from "./sous-domaine-intervention.service";
import { Subject } from "rxjs";
import { SousDomaineIntervention } from "../models/sous-domaine-intervention.model";

@Injectable()
export class RealisationService {

  subject = new Subject<Realisation[]>();
  private realisations: Realisation[];

  constructor(private sousDomaineInterventionService: SousDomaineInterventionService) {
    this.init();
  }

  init() {
    this.realisations = [
      new Realisation(1,
        "Réalisation d’un enduit sur une extension à proximité de Villiers-sur-Mer dans le Calvados",
        ["https://material.angular.io/assets/img/examples/shiba1.jpg"],
        "",
        "",
        this.sousDomaineInterventionService.get("isolation-thermique-par-exterieur"), //'menuiserie-exterieure'
        new Date()
      ),
      new Realisation(2,
        "Cuisine blanche et verte, réagencement et rénovation dans un appartement lyonnais, quartier Tête D'Or",
        ["https://material.angular.io/assets/img/examples/shiba2.jpg"],
        "",
        "",
        this.sousDomaineInterventionService.get("installation-chauffage"), //'renovation-interieure'
        new Date()
      ),
      new Realisation(3,
        "Rénovation d'un Appartement Haussmannien - Lyon 6 - Secteur Edgar Quinet",
        [
          "https://material.angular.io/assets/img/examples/shiba1.jpg",
          "https://material.angular.io/assets/img/examples/shiba2.jpg",
          "https://material.angular.io/assets/img/examples/shiba1.jpg"
        ],
        "Comment choisir sa terrasse ? <br>Il existe de nombreuses possibilités: bois, béton, pierres. L'agence de courtage en travaux LA MAISON DES TRAVAUX Boucle de Seine à SAINT-GERMAIN-EN-LAYE et SARTROUVILLE vous conseil sur les différentes solutions en fonction de votre budget et des échantillons de matériaux vous son présentez pour vous aidez dans vos choix, avant l'intervention d'un professionnel de notre réseau.",
        "« Notre courtier en travaux a su nous guider dans le choix des matériaux et l'entretien de notre terrasse avec l'artisan retenu. Depuis nous sommes ravis et l'avons recommandé à notre entourage. » Témoignage d'un client à LA CELLE-SAINT-CLOUD.",
        this.sousDomaineInterventionService.get("placard-dressing-sur-mesure"), //'renovation-interieure'
        new Date()
      ),
      new Realisation(4,
        "Rénovation de maison individuelle à La Haye Fouassière (44)",
        ["https://material.angular.io/assets/img/examples/shiba2.jpg"],
        "",
        "",
        this.sousDomaineInterventionService.get("installation-electrique"), //'renovation-interieure'
        new Date()
      ),
      new Realisation(5,
        "Rénovation de maison individuelle à La Haye Fouassière (44)",
        ["https://material.angular.io/assets/img/examples/shiba1.jpg"],
        "",
        "",
        this.sousDomaineInterventionService.get("agrandissement-maison"), //'extension'
        new Date()
      )
    ];
  }

  emitSubject() {
    this.subject.next(this.realisations.slice());
  }

  getLast(nbOfRealisations: number): Realisation[] {
    return this.realisations.slice(0, nbOfRealisations);
  }

  getBySousDomaine(sousDomaine: string): Realisation[] {
    return this.realisations.filter(
      x => x.sousDomaineIntervention.id == sousDomaine
    );
  }

  get(id: number): Realisation {
    return this.realisations.filter(
      x => x.id == id
    )[0];
  }

  create(realisation: Realisation) {
    this.realisations.push(realisation);
    this.emitSubject();
  }

  update(realisation: Realisation) {
    let old = this.get(realisation.id);

    this.delete(old);
    this.create(realisation);

  }

  delete(realisation: Realisation) {
    const index = this.realisations.indexOf(realisation, 0);
    if (index > -1) {
      this.realisations.splice(index, 1);
    }

    this.emitSubject();
  }

}
