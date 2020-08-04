import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import { Devis } from '../_models/devis.model';
import { DevisService } from '../_services/devis.service';
import { MatDialog } from '@angular/material/dialog';
import { AlertDialogComponent } from '../_components/alert-dialog/alert-dialog.component';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-devis',
  templateUrl: './devis.component.html',
  styleUrls: ['./devis.component.scss']
})
export class DevisComponent implements OnInit {
  devisForm: FormGroup;

  @Input() currentDevis: Devis;
  @Input() readOnly: boolean;
  isUpdate: boolean;

  constructor(private formBuilder: FormBuilder, private devisService: DevisService, private dialog: MatDialog, private router: Router) {
  }

  ngOnInit() {
    if(this.currentDevis) {
      this.isUpdate = true;
    } else {
      this.isUpdate = false;
      this.currentDevis = new Devis('','','','','','','','','', new Date());
    }
    this.initForm();
  }

  initForm() {
    this.devisForm = this.formBuilder.group({
      hideRequired: false,
      floatLabel: 'auto',
      civilite: [this.currentDevis.civilite, Validators.required],
      prenom: [this.currentDevis.prenom, [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      nom: [this.currentDevis.nom, [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      adresse: [this.currentDevis.adresse, [Validators.required, Validators.minLength(5), Validators.maxLength(200)]],
      codePostal: [this.currentDevis.codePostal, [Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
      ville: [this.currentDevis.ville, [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      email: [this.currentDevis.email, [Validators.required, Validators.email]],
      telephone: [this.currentDevis.telephone, [Validators.required, Validators.minLength(9), Validators.maxLength(12)]],
      description: [this.currentDevis.description, [Validators.required, Validators.maxLength(2000)]]
    });

    if(this.readOnly) {
      this.devisForm.disable();
    } else {
      this.devisForm.enable();
    }
  }

  submitForm() {
    const formValue = this.devisForm.value;

    const devis: Devis = new Devis(
      formValue['civilite'],
      formValue['prenom'],
      formValue['nom'],
      formValue['adresse'],
      formValue['codePostal'],
      formValue['ville'],
      formValue['email'],
      formValue['telephone'],
      formValue['description'],
      new Date(),
      this.currentDevis.id
    );
    
    if(this.currentDevis.id) {
      this.devisService.update(devis).subscribe(
        () => {
          this.devisService.emitSubject();
          this.openAlert(devis, 'Mis à jour du devis OK', 'admin');
        },
        error => console.log(error)
      )
    } else {
      this.devisService.create(devis).then(
        () => this.openAlert(devis, 'Votre message a bien été envoyé.<br>Vous recevrez une réponse dans les plus brefs délai.', 'home'),
        error => console.log(error)
      )
    }
  }

  openAlert(devis: Devis, message: string, navigate: string) {
    const dialogRef = this.dialog.open(AlertDialogComponent, {
      data: {texte: message}
    });

    dialogRef.afterClosed().subscribe(
      () => this.router.navigate([navigate])
    );
  }

  canUpdate() {
    this.readOnly = false;
    this.devisForm.enable();
  }

}
