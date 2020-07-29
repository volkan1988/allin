import { Devis } from '../models/devis.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DevisService {

  listDevis = [
    new Devis("f", "Oya", "Kus", "17 Rue Louis Auguste Blanqui", "93140", "Bondy", "volkankus1@gmail.com", "0675161816", "Ceci est un test", new Date(), 1),
    new Devis("m", "Volkan", "Kus", "17 Rue Louis Auguste Blanqui", "93140", "Bondy", "volkankus1@gmail.com", "0675161816", "Ceci est un testCeci est un testCeci est un testCeci est un testCeci est un testCeci est un testCeci est un testCeci est un testCeci est un testCeci est un testCeci est un testCeci est un testCeci est un testCeci est un testCeci est un testCeci est un testCeci est un testCeci est un testCeci est un testCeci est un testCeci est un testCeci est un test", new Date(), 2),
    new Devis("m", "Volkan", "Kus", "17 Rue Louis Auguste Blanqui", "93140", "Bondy", "volkankus1@gmail.com", "0675161816", "Ceci est un test", new Date(), 3),
    new Devis("m", "Volkan", "Kus", "17 Rue Louis Auguste Blanqui", "93140", "Bondy", "volkankus1@gmail.com", "0675161816", "Ceci est un test", new Date(), 4),
    new Devis("m", "Volkan", "Kus", "17 Rue Louis Auguste Blanqui", "93140", "Bondy", "volkankus1@gmail.com", "0675161816", "Ceci est un test", new Date(), 5),
    new Devis("m", "Volkan", "Kus", "17 Rue Louis Auguste Blanqui", "93140", "Bondy", "volkankus1@gmail.com", "0675161816", "Ceci est un test", new Date(), 6),
    new Devis("m", "Volkan", "Kus", "17 Rue Louis Auguste Blanqui", "93140", "Bondy", "volkankus1@gmail.com", "0675161816", "Ceci est un test", new Date(), 7),
    new Devis("m", "Volkan", "Kus", "17 Rue Louis Auguste Blanqui", "93140", "Bondy", "volkankus1@gmail.com", "0675161816", "Ceci est un test", new Date(), 8),
    new Devis("m", "Volkan", "Kus", "17 Rue Louis Auguste Blanqui", "93140", "Bondy", "volkankus1@gmail.com", "0675161816", "Ceci est un test", new Date(), 9),
    new Devis("m", "Volkan", "Kus", "17 Rue Louis Auguste Blanqui", "93140", "Bondy", "volkankus1@gmail.com", "0675161816", "Ceci est un test", new Date(), 10)    
  ];

  constructor() { }

  createDevis(devis: Devis) {
    console.log(devis);
    this.listDevis.push(devis);
  }

  deleteDevis(devis: Devis) {
    const index = this.listDevis.indexOf(devis, 0);
    if(index > -1) {
      this.listDevis.splice(index, 1);
    }
  }

  getListDevis(): Devis[] {
    return this.listDevis;
  }


}
