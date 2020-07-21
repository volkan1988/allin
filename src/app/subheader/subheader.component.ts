import { Component, Input, OnInit } from '@angular/core';

import { SousDomaineIntervention } from '../models/sous-domaine-intervention.model';
import { SousDomaineInterventionService } from '../services/sous-domaine-intervention.service';

@Component({
  selector: 'app-subheader',
  templateUrl: './subheader.component.html',
  styleUrls: ['./subheader.component.scss']
})
export class SubheaderComponent implements OnInit {

  @Input() title: string;
  @Input() subtitle: string;
  @Input() domaine: string;
  @Input() color: string;
  
  interventions: SousDomaineIntervention[];
  
  constructor(private sousDomaineInterventionService: SousDomaineInterventionService) { }

  ngOnInit() {
    this.interventions = this.sousDomaineInterventionService.getSousDomaineByDomaineId(this.domaine);
  }

}
