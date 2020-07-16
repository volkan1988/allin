import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import { Devis } from '../models/devis.model';
import { DevisService } from '../services/devis.service';

@Component({
  selector: 'app-devis',
  templateUrl: './devis.component.html',
  styleUrls: ['./devis.component.scss']
})
export class DevisComponent implements OnInit {
  devisForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private devisService: DevisService) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.devisForm = this.formBuilder.group({
      hideRequired: false,
      floatLabel: 'auto',
      sexe: ['', Validators.required],
      prenom: ['', Validators.required, Validators.minLength(2), Validators.maxLength(50)],
      nom: ['', Validators.required, Validators.minLength(2), Validators.maxLength(50)],
      adresse: ['', Validators.required, Validators.minLength(5), Validators.maxLength(200)],
      codePostal: ['', Validators.required, Validators.minLength(5), Validators.maxLength(5)],
      ville: ['', Validators.required, Validators.minLength(2), Validators.maxLength(50)],
      email: ['', Validators.required, Validators.email],
      telephone: ['', Validators.required, Validators.minLength(9), Validators.minLength(12)],
      description: ['', Validators.required, Validators.maxLength(2000)]
    });
  }

  submitForm() {
    const formValue = this.devisForm.value;

    const devis: Devis = new Devis(
      formValue['sexe'],
      formValue['prenom'],
      formValue['nom'],
      formValue['adresse'],
      formValue['codePostal'],
      formValue['ville'],
      formValue['email'],
      formValue['telephone'],
      formValue['description'],
      new Date()
    );
    
    this.devisService.creerDevis(devis);
  }
}
