import { Component, Input, OnInit } from '@angular/core';

import { Domaine } from '../_models/domaine.model';
import { Realisation } from '../_models/realisation.model';
import { Router } from '@angular/router';
import { SousDomaine } from '../_models/sous-domaine.model';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  @Input() domaine: Domaine;
  @Input() sousDomaine: SousDomaine;
  @Input() realisation: Realisation;

  levelsLibelle: string[] = new Array();
  levelsUrl: string[] = new Array();

  constructor(private router: Router) { }

  ngOnInit() {

    if (this.realisation !== undefined) {
      this.sousDomaine = this.realisation.sousDomaine;
      this.domaine = this.sousDomaine.domaine;

      this.levelsLibelle.push(this.sousDomaine.libelle, this.realisation.libelle);

    } else if (this.sousDomaine !== undefined) {
      this.domaine = this.sousDomaine.domaine;

      this.levelsLibelle.push(this.sousDomaine.libelle);

    }

    this.levelsLibelle.unshift(this.domaine.libelle);

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
