import { Devis } from '../_models/devis.model';
import { Injectable } from '@angular/core';
import { Subject, Subscription, Observable, observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../_environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DevisService {

  subject = new Subject<Devis[]>();

  private listDevis: Devis[] = [];

  private url = environment.apiUrl + 'devis.json';

  constructor(private httpClient: HttpClient) {}

  emitSubject() {
    this.subject.next(this.listDevis.slice());
  }

  getAll() {
    this.httpClient.get<Devis[]>(this.url).subscribe(
      response => {
        this.listDevis = response;
        this.emitSubject();
      },
      error => console.log(error)
    );
  }

  create(devis: Devis): Promise<Object> {
    let promise = new Promise(
      (resolve, reject) => {
        this.httpClient.get<Devis[]>(this.url).subscribe(
          response => {
            this.listDevis = response === null ? [] : response;

            devis.id = this.generateId();
            this.listDevis.push(devis);
            
            this.registerAll().toPromise().then(() => resolve());
          },
          error => reject()
        );
      }
    )

    return promise;
  }

  update(devis: Devis): Observable<Object> {
    let index = this.listDevis.findIndex(
      x => x.id == devis.id
    );

    this.listDevis.splice(index, 1, devis);

    return this.registerAll();
  }

  delete(devis: Devis) {
    let index = this.listDevis.findIndex(
      x => x.id == devis.id
    );

    this.listDevis.splice(index, 1);

    this.registerAll().subscribe(
      () => this.emitSubject(),
      (error) => console.log(error)
    );
    
  }

  registerAll(): Observable<Object> {
    return this.httpClient.put(this.url, this.listDevis);
  }

  generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
  };
}
