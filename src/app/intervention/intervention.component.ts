import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { DomaineIntervention } from '../models/domaine-intervention.model';
import { SousDomaineIntervention } from '../models/sous-domaine-intervention.model';
import { SousDomaineInterventionService } from '../services/sous-domaine-intervention.service';

@Component({
  selector: 'app-intervention',
  templateUrl: './intervention.component.html',
  styleUrls: ['./intervention.component.scss']
})
export class InterventionComponent implements OnInit {
  domaineIntervention: DomaineIntervention;
  sousDomaineInterventions: SousDomaineIntervention[];
  
  constructor(
    private router: ActivatedRoute,
    private sousDomaineInterventionService: SousDomaineInterventionService
    ) { }

  ngOnInit() {
    let domaineId = this.router.snapshot.url.toString();

    this.sousDomaineInterventions = this.sousDomaineInterventionService.getByDomaine(domaineId);
    this.domaineIntervention = this.sousDomaineInterventions[0].domaineIntervention;

  }

}
