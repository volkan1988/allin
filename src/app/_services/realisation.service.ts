import { Injectable } from "@angular/core";
import { Realisation } from "../_models/realisation.model";
import { SousDomaineService } from "./sous-domaine.service";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "../_environments/environment";

@Injectable()
export class RealisationService {

  subject = new Subject<Realisation[]>();
  private realisations: Realisation[] = [];
  private url = environment.apiUrl + 'realisations.json';

  constructor(private sousDomaineService: SousDomaineService, private httpClient: HttpClient) { }

  emitSubject() {
    this.subject.next(this.realisations.slice());
  }

  getAll() {
    this.httpClient.get<Realisation[]>(this.url).subscribe(
      response => {
        this.realisations = response;
        this.emitSubject();
      }
    )
  }

  getLast(nbOfRealisations: number): Realisation[] {
    return this.realisations.slice(0, nbOfRealisations);
  }

  getBySousDomaine(sousDomaine: string): Realisation[] {
    return this.realisations.filter(
      x => x.sousDomaine.id == sousDomaine
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


  saveToServer() {
    this.httpClient.put(this.url, this.realisations).subscribe(
      () => console.log('Enregistrement terminé !'),
      error => console.log(error)
    );
  }

  updateToServer(realisation: Realisation) {
    this.httpClient.put(this.url, realisation).subscribe(
      () => console.log('Enregistrement terminé !'),
      error => console.log(error)
    );
  }

  getUrl(realisation: Realisation): string {
    let url = realisation.sousDomaine.domaine.id + '/' +
      realisation.sousDomaine.id + '/' +
      realisation.id;

      console.log(url);
    return url;
  }
}
