import { Component, OnInit, Input } from '@angular/core';
import { Domaine } from 'src/app/_models/domaine.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-home-domaine-update',
  templateUrl: './admin-home-domaine-update.component.html',
  styleUrls: ['./admin-home-domaine-update.component.scss']
})
export class AdminHomeDomaineUpdateComponent implements OnInit {
  form: FormGroup;

  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.jpeg,.png",
    uploadAPI:  {
      url:"https://example-file-upload-api",
      method:"POST",
      headers: {
     "Content-Type" : "text/plain;charset=UTF-8"
    //  "Authorization" : `Bearer ${token}`
      },
      params: {
        'page': '1'
      },
      responseType: 'blob',
    },
    hideProgressBar: false,
    hideResetBtn: false,
    hideSelectBtn: false,
    fileNameIndex: false,
    replaceTexts: {
      selectFileBtn: 'Selectionner image',
      resetBtn: 'Effacer',
      uploadBtn: 'Envoyer',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Attach Files...',
      afterUploadMsg_success: 'Envoi réussi !',
      afterUploadMsg_error: 'Echec d\'envoi',
      sizeLimit: 'Limite de poids',
    }
};

  @Input() currentDomaine: Domaine;
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group({
      hideRequired: false,
      floatLabel: 'auto',
      libelle: [this.currentDomaine.libelle, Validators.required],
      description: [this.currentDomaine.description, [Validators.required, Validators.maxLength(2000)]],
      image: [this.currentDomaine.image, Validators.required],
    });
  }

  submitForm() {

  }
}
