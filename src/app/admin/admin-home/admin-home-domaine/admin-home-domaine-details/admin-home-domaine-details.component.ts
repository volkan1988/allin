import { Component, OnInit, Input } from '@angular/core';
import { DomaineIntervention } from 'src/app/models/domaine-intervention.model';

@Component({
  selector: 'app-admin-home-domaine-details',
  templateUrl: './admin-home-domaine-details.component.html',
  styleUrls: ['./admin-home-domaine-details.component.scss']
})
export class AdminHomeDomaineDetailsComponent implements OnInit {
  showUpdate: boolean = false;
  @Input() currentDomaine: DomaineIntervention;

  constructor() { }

  ngOnInit() {
  }

  update() {
    this.showUpdate = true;
  }

}
