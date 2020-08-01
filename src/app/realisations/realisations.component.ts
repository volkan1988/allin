import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Realisation } from '../models/realisation.model';
import { RealisationService } from '../services/realisation.service';
import { SousDomaineIntervention } from '../models/sous-domaine-intervention.model';
import { SousDomaineInterventionService } from '../services/sous-domaine-intervention.service';

@Component({
  selector: 'app-realisations',
  templateUrl: './realisations.component.html',
  styleUrls: ['./realisations.component.scss']
})
export class RealisationsComponent implements OnInit {

  title: string;
  sousDomaineIntervention: SousDomaineIntervention;
  realisations: Realisation[];

  constructor(
    private route: ActivatedRoute,
    private sousDomaineInterventionService: SousDomaineInterventionService,
    private realisationService: RealisationService
  ) { }

  ngOnInit() {
    let sousDomaine = this.route.snapshot.params['sous-domaine'];
    this.sousDomaineIntervention = this.sousDomaineInterventionService.get(sousDomaine);
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
