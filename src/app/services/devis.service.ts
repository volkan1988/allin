import { Devis } from '../models/devis.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DevisService {

  constructor() { }

  creerDevis(devis: Devis) {
    console.log(devis);
  }
}
