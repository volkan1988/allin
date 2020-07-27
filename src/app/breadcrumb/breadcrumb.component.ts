import { Component, Input, OnInit } from '@angular/core';

import { DomaineIntervention } from '../models/domaine-intervention.model';
import { Realisation } from '../models/realisation.model';
import { Router } from '@angular/router';
import { SousDomaineIntervention } from '../models/sous-domaine-intervention.model';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  @Input() domaineIntervention: DomaineIntervention;
  @Input() sousDomaineIntervention: SousDomaineIntervention;
  @Input() realisation: Realisation;

  levelsLibelle: string[] = new Array();
  levelsUrl: string[] = new Array();

  constructor(private router: Router) { }

  ngOnInit() {

    if (this.realisation !== undefined) {
      this.sousDomaineIntervention = this.realisation.sousDomaineIntervention;
      this.domaineIntervention = this.sousDomaineIntervention.domaineIntervention;

      this.levelsLibelle.push(this.sousDomaineIntervention.libelle, this.realisation.libelle);

    } else if (this.sousDomaineIntervention !== undefined) {
      this.domaineIntervention = this.sousDomaineIntervention.domaineIntervention;

      this.levelsLibelle.push(this.sousDomaineIntervention.libelle);

    }

    this.levelsLibelle.unshift(this.domaineIntervention.libelle);

    this.levelsUrl = this.router.url.split('/');
    this.levelsUrl.shift();
  }

  getUrl(pos: number): string {

    let url: string = '';

    for (let i = 0; i <= pos; i++) {
      url += '/' + this.levelsUrl[i];
    }

    return url;
  }
}
