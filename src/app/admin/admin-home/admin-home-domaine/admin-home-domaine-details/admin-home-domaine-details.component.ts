import { Component, OnInit, Input } from '@angular/core';
import { Domaine } from 'src/app/_models/domaine.model';

@Component({
  selector: 'app-admin-home-domaine-details',
  templateUrl: './admin-home-domaine-details.component.html',
  styleUrls: ['./admin-home-domaine-details.component.scss']
})
export class AdminHomeDomaineDetailsComponent implements OnInit {
  showUpdate: boolean = false;
  @Input() currentDomaine: Domaine;

  constructor() { }

  ngOnInit() {
  }

  update() {
    this.showUpdate = true;
  }

}
