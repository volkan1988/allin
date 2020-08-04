import { Component, OnInit, OnDestroy } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Domaine } from '../_models/domaine.model';
import { SousDomaine } from '../_models/sous-domaine.model';
import { SousDomaineService } from '../_services/sous-domaine.service';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-intervention',
  templateUrl: './intervention.component.html',
  styleUrls: ['./intervention.component.scss']
})
export class InterventionComponent implements OnInit, OnDestroy {
  domaine: Domaine;
  sousDomaines: SousDomaine[];
  sousDomainesSubscription: Subscription;
  showSpinner = true;

  constructor(
    private router: ActivatedRoute,
    private sousDomaineService: SousDomaineService
    ) { }

  ngOnInit() {
    let domaineId = this.router.snapshot.url.toString();

    this.sousDomainesSubscription = this.sousDomaineService.subject.subscribe(
      sousDomaines => {
        sousDomaines = sousDomaines.filter(
          x => x.domaine.id === domaineId
        );

        this.sousDomaines = sousDomaines;
        this.domaine = this.sousDomaines[0].domaine;
        this.showSpinner = false;
      },
      error => console.log(error)
    );

    this.sousDomaineService.getAll();
  }

  ngOnDestroy() {
    this.sousDomainesSubscription.unsubscribe();
  }
}
