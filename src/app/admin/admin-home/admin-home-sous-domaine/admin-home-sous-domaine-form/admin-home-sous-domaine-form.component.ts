import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SousDomaine } from 'src/app/_models/sous-domaine.model';
import { DomaineService } from 'src/app/_services/domaine.service';
import { Domaine } from 'src/app/_models/domaine.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-home-sous-domaine-form',
  templateUrl: './admin-home-sous-domaine-form.component.html',
  styleUrls: ['./admin-home-sous-domaine-form.component.scss']
})
export class AdminHomeSousDomaineFormComponent implements OnInit, OnDestroy {

  form: FormGroup;
  readOnly: boolean;
  domaines: Domaine[];
  domainesSubscription: Subscription;

  @Input() currentSousDomaine: SousDomaine;
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

  constructor(private formBuilder: FormBuilder, private domaineService: DomaineService) { }

  ngOnInit() {
    switch(this.formType) {
      case 'edit': this.readOnly = false;break;
      case 'read': this.readOnly = true;break;
      default: this.readOnly = false;this.currentSousDomaine = new SousDomaine('','','','', null);
    }

    this.domainesSubscription = this.domaineService.subject.subscribe(
      domaines => {
        this.domaines = domaines;
        this.initForm();
      },
      error => console.log(error),
      () => console.log('Subscribe complete')
    );

    this.domaineService.emitSubject();
  }

  initForm() {
    this.form = this.formBuilder.group({
      hideRequired: false,
      floatLabel: 'auto',
      libelle: [this.currentSousDomaine.libelle, Validators.required],
      description: [this.currentSousDomaine.description, [Validators.required, Validators.maxLength(2000)]],
      domaine: [this.currentSousDomaine.domaine ? this.currentSousDomaine.domaine.id : '', Validators.required],
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

  ngOnDestroy(): void {
    this.domainesSubscription.unsubscribe();
  }

}
