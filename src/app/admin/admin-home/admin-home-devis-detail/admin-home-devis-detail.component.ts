import { Component, OnInit, Input } from '@angular/core';
import { Devis } from 'src/app/models/devis.model';

@Component({
  selector: 'app-admin-home-devis-detail',
  templateUrl: './admin-home-devis-detail.component.html',
  styleUrls: ['./admin-home-devis-detail.component.scss']
})
export class AdminHomeDevisDetailComponent implements OnInit {

  @Input() currentDevis: Devis;
  listParamDevis: string[];

  constructor() { }

  ngOnInit() {
    this.listParamDevis = Object.keys(this.currentDevis);
  }

  back() {
    this.currentDevis = null;
  }

  isDate(val) {
    return val.constructor.name === 'Date';
  }

}
