import { Component, OnInit } from '@angular/core';

import { DomaineIntervention } from 'src/app/models/domaine-intervention.model';
import { DomaineInterventionService } from 'src/app/services/domaine-intervention.service';

@Component({
  selector: 'app-home-intervention',
  templateUrl: './home-intervention.component.html',
  styleUrls: ['./home-intervention.component.scss']
})
export class HomeInterventionComponent implements OnInit {

  interventions: DomaineIntervention[];
  
  constructor(private domaineInterventionService: DomaineInterventionService) { }

  ngOnInit() {
    this.interventions = this.domaineInterventionService.domainesIntervention;
  }

}
