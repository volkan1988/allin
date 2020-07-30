import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SousDomaineIntervention } from 'src/app/models/sous-domaine-intervention.model';
import { DomaineInterventionService } from 'src/app/services/domaine-intervention.service';
import { DomaineIntervention } from 'src/app/models/domaine-intervention.model';

@Component({
  selector: 'app-admin-home-sous-domaine-form',
  templateUrl: './admin-home-sous-domaine-form.component.html',
  styleUrls: ['./admin-home-sous-domaine-form.component.scss']
})
export class AdminHomeSousDomaineFormComponent implements OnInit {

  form: FormGroup;
  readOnly: boolean;
  domainesIntervention: DomaineIntervention[];
  @Input() currentSousDomaine: SousDomaineIntervention;
  @Input() formType: string;

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

  constructor(private formBuilder: FormBuilder, private domaineInterventionService: DomaineInterventionService) { }

  ngOnInit() {
    switch(this.formType) {
      case 'edit': this.readOnly = false;break;
      case 'read': this.readOnly = true;break;
      default: this.readOnly = false;this.currentSousDomaine = new SousDomaineIntervention('','','','', null);
    }

    this.domainesIntervention = this.domaineInterventionService.domainesIntervention;

    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group({
      hideRequired: false,
      floatLabel: 'auto',
      libelle: [this.currentSousDomaine.libelle, Validators.required],
      description: [this.currentSousDomaine.description, [Validators.required, Validators.maxLength(2000)]],
      domaine: [this.currentSousDomaine.domaineIntervention ? this.currentSousDomaine.domaineIntervention.id : '', Validators.required],
      image: [this.currentSousDomaine.image, Validators.required],
    });

    if(this.readOnly) {
      this.form.disable();
    } else {
      this.form.enable();
    }
  }

  enableForm() {
    this.form.enable();
  }

  submitForm() {

  }

}
