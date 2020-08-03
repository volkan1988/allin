import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Realisation } from '../_models/realisation.model';
import { RealisationService } from '../_services/realisation.service';
import { SousDomaine } from '../_models/sous-domaine.model';
import { SousDomaineService } from '../_services/sous-domaine.service';

@Component({
  selector: 'app-realisations',
  templateUrl: './realisations.component.html',
  styleUrls: ['./realisations.component.scss']
})
export class RealisationsComponent implements OnInit {

  title: string;
  sousDomaine: SousDomaine;
  realisations: Realisation[];

  constructor(
    private route: ActivatedRoute,
    private sousDomaineService: SousDomaineService,
    private realisationService: RealisationService
  ) { }

  ngOnInit() {
    let sousDomaine = this.route.snapshot.params['sous-domaine'];
    this.sousDomaine = this.sousDomaineService.get(sousDomaine);
    this.realisations = this.realisationService.getBySousDomaine(sousDomaine);

    //A SUPPRIMER
    this.realisations = this.realisations
    .concat(this.realisations)
    .concat(this.realisations)
    .concat(this.realisations)
    .concat(this.realisations)
    .concat(this.realisations)
    .concat(this.realisations)
    .concat(this.realisations)
    .concat(this.realisations);
  }

}
