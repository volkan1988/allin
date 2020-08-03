import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Domaine } from 'src/app/_models/domaine.model';
import { SousDomaine } from 'src/app/_models/sous-domaine.model';
import { SousDomaineService } from 'src/app/_services/sous-domaine.service';
import { Realisation } from 'src/app/_models/realisation.model';
import { DomaineService } from 'src/app/_services/domaine.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-home-realisation-form',
  templateUrl: './admin-home-realisation-form.component.html',
  styleUrls: ['./admin-home-realisation-form.component.scss']
})
export class AdminHomeRealisationFormComponent implements OnInit, OnDestroy {
  
  form: FormGroup;
  readOnly: boolean;
  domaines: Domaine[];
  sousDomaines: SousDomaine[];
  domaineSubscription: Subscription;

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
    private domaineService: DomaineService,
    private sousDomaineService: SousDomaineService
  ) { }

  ngOnInit() {
    switch(this.formType) {
      case 'edit': this.readOnly = false;break;
      case 'read': this.readOnly = true;break;
      default: this.readOnly = false;this.currentRealisation = new Realisation(-1, '',[], '', '', null, null);
    }

    this.domaineSubscription = this.domaineService.subject.subscribe(
      domaines => {
        this.domaines = domaines;
        this.initForm();
      },
      error => console.log(error),
      () => console.log("Observable complete")
    );

    this.domaineService.emitSubject();
  }

  initForm() {
    if(this.currentRealisation.sousDomaine) {
      this.updateSousDomaine(this.currentRealisation.sousDomaine.domaine.id);
    }

    this.form = this.formBuilder.group({
      hideRequired: false,
      floatLabel: 'auto',
      libelle: [this.currentRealisation.libelle, Validators.required],
      besoinClient: [this.currentRealisation.besoinClient, [Validators.required, Validators.maxLength(2000)]],
      projet: [this.currentRealisation.projet, [Validators.required, Validators.maxLength(2000)]],
      domaine: [this.currentRealisation.sousDomaine ? this.currentRealisation.sousDomaine.domaine.id : '', Validators.required],
      sousDomaine: [this.currentRealisation.sousDomaine ? this.currentRealisation.sousDomaine.id : '', Validators.required],
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
    this.sousDomaines = this.sousDomaineService.getByDomaine(value);
  }

  submitForm() {

  }

  ngOnDestroy(): void {
    this.domaineSubscription.unsubscribe();
  }
}
