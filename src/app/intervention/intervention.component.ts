import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Domaine } from '../_models/domaine.model';
import { SousDomaine } from '../_models/sous-domaine.model';
import { SousDomaineService } from '../_services/sous-domaine.service';

@Component({
  selector: 'app-intervention',
  templateUrl: './intervention.component.html',
  styleUrls: ['./intervention.component.scss']
})
export class InterventionComponent implements OnInit {
  domaine: Domaine;
  sousDomaines: SousDomaine[];
  
  constructor(
    private router: ActivatedRoute,
    private sousDomaineService: SousDomaineService
    ) { }

  ngOnInit() {
    let domaineId = this.router.snapshot.url.toString();

    this.sousDomaines = this.sousDomaineService.getByDomaine(domaineId);
    this.domaine = this.sousDomaines[0].domaine;

  }

}
