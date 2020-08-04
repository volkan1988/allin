import { DomaineService } from './domaine.service';
import { Injectable } from '@angular/core';
import { SousDomaine } from '../_models/sous-domaine.model';
import { Subject } from 'rxjs';
import { environment } from '../_environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SousDomaineService {

  subject = new Subject<SousDomaine[]>();
  private sousDomaines: SousDomaine[];
  private url = environment.apiUrl + 'sousDomaines.json';

  constructor(private domaineService: DomaineService, private httpClient: HttpClient) { }

  emitSubject() {
    this.subject.next(this.sousDomaines.slice());
  }

  get(id: string): SousDomaine {
    return this.sousDomaines.filter(
      x => x.id == id
    )[0];
  }

  getByDomaine(id: string): SousDomaine[] {
    return this.sousDomaines.filter(
      x => x.domaine.id == id
    );
  }

  create(sousDomaine: SousDomaine) {
    this.sousDomaines.push(sousDomaine);
    this.emitSubject();
  }

  update(sousDomaine: SousDomaine) {
    let old = this.get(sousDomaine.id);
    this.delete(old);
    this.create(sousDomaine);
  }

  delete(sousDomaine: SousDomaine) {
    const index = this.sousDomaines.indexOf(sousDomaine, 0);
    if (index > -1) {
      this.sousDomaines.splice(index, 1);
    }

    this.emitSubject();
  }

  getAll() {
    this.httpClient.get<SousDomaine[]>(this.url).subscribe(
      response => {
        this.sousDomaines = response;
        this.emitSubject();
      }
    )
  }

  saveToServer() {
    this.httpClient.put(this.url, this.sousDomaines).subscribe(
      () => console.log('Enregistrement terminé !'),
      error => console.log(error)
    );
  }

  updateToServer(domaine: SousDomaine) {
    this.httpClient.put(this.url, domaine).subscribe(
      () => console.log('Enregistrement terminé !'),
      error => console.log(error)
    );
  }
}
