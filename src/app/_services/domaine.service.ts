import { Domaine } from '../_models/domaine.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from '../_environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DomaineService {

  subject = new Subject<Domaine[]>();
  private url = environment.apiUrl + 'domaines.json';
  
  constructor(private httpClient: HttpClient){}

  private domaines: Domaine[] = [
    new Domaine(
      'extension',
      'Extension',
      "Agrandissement de maison traditionnelle, en bois, surélévation, création de véranda, garage, souplex, agrandissement de la surface habitable…",
      '../../../assets/images/renovation-interieure.jpg',
      'blue'),
    new Domaine(
      'renovation-interieure',
      'Rénovation intérieure',
      "Rénovation de maison et d’appartement, travaux d’aménagement de combles, optimisation de l’isolation, rénovation de salle de bain, de cuisine, pose de parquet, carrelage, peinture…",
      '../../../assets/images/renovation-interieure.jpg',
      'yellow'),
    new Domaine(
      'menuiserie-exterieure',
      'Menuiserie extérieure',
      "Ravalement de façade, isolation thermique par l’extérieur, travaux de maçonnerie, charpente, toiture, création de terrasse, piscine, aménagement de jardin, allées, clôtures…",
      '../../../assets/images/menuiserie-exterieure.jpg',
      'pink'),
  ]

  emitSubject() {
    this.subject.next(this.domaines.slice());
  }

  get(id: string): Domaine {
    return this.domaines.filter(
      x => x.id == id
    )[0];
  }

  update(domaine: Domaine) {
    let old = this.domaines.filter(
      x => x.id == domaine.id
    )[0];

    this.delete(old);
    this.create(domaine);
  }

  getToServer() {
    this.httpClient.get<Domaine[]>(this.url).subscribe(
      response => {
        this.domaines = response;
        this.emitSubject();
      }
    )
  }

  saveToServer() {
    this.httpClient.put(this.url, this.domaines).subscribe(
      () => console.log('Enregistrement terminé !'),
      error => console.log(error)
    );
  }

  updateToServer(domaine: Domaine) {
    this.httpClient.put(this.url, domaine).subscribe(
      () => console.log('Enregistrement terminé !'),
      error => console.log(error)
    );
  }

  private delete(domaine: Domaine){
    const index = this.domaines.indexOf(domaine, 0);
    if (index > -1) {
      this.domaines.splice(index, 1);
    }

    this.emitSubject();
  }

  private create(domaine: Domaine){
    this.domaines.push(domaine);
    this.emitSubject();
  }

}
