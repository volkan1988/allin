import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DomaineIntervention } from 'src/app/models/domaine-intervention.model';
import { SousDomaineIntervention } from 'src/app/models/sous-domaine-intervention.model';
import { SousDomaineInterventionService } from 'src/app/services/sous-domaine-intervention.service';
import { Realisation } from 'src/app/models/realisation.model';
import { DomaineInterventionService } from 'src/app/services/domaine-intervention.service';

@Component({
  selector: 'app-admin-home-realisation-form',
  templateUrl: './admin-home-realisation-form.component.html',
  styleUrls: ['./admin-home-realisation-form.component.scss']
})
export class AdminHomeRealisationFormComponent implements OnInit {
  
  form: FormGroup;
  readOnly: boolean;
  domainesIntervention: DomaineIntervention[];
  sousDomainesIntervention: SousDomaineIntervention[];
  @Input() currentRealisation: Realisation;
  @Input() formType: string;

  afuConfig = {
    multiple: true,
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

  constructor(
    private formBuilder: FormBuilder,
    private domaineInterventionService: DomaineInterventionService,
    private sousDomaineInterventionService: SousDomaineInterventionService
  ) { }

  ngOnInit() {
    switch(this.formType) {
      case 'edit': this.readOnly = false;break;
      case 'read': this.readOnly = true;break;
      default: this.readOnly = false;this.currentRealisation = new Realisation(-1, '',[], '', '', null, null);
    }

    this.domainesIntervention = this.domaineInterventionService.domainesIntervention;

    this.initForm();
  }

  initForm() {
    if(this.currentRealisation.sousDomaineIntervention) {
      this.updateSousDomaine(this.currentRealisation.sousDomaineIntervention.domaineIntervention.id);
    }

    this.form = this.formBuilder.group({
      hideRequired: false,
      floatLabel: 'auto',
      libelle: [this.currentRealisation.libelle, Validators.required],
      besoinClient: [this.currentRealisation.besoinClient, [Validators.required, Validators.maxLength(2000)]],
      projet: [this.currentRealisation.projet, [Validators.required, Validators.maxLength(2000)]],
      domaine: [this.currentRealisation.sousDomaineIntervention ? this.currentRealisation.sousDomaineIntervention.domaineIntervention.id : '', Validators.required],
      sousDomaine: [this.currentRealisation.sousDomaineIntervention ? this.currentRealisation.sousDomaineIntervention.id : '', Validators.required],
      dateCreation: [this.currentRealisation.dateCreation, Validators.required],
      image: [this.currentRealisation.image, Validators.required],
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

  updateSousDomaine(value) {
    this.sousDomainesIntervention = this.sousDomaineInterventionService.getSousDomaineByDomaineId(value);
  }

  submitForm() {

  }

}
