import { Component, OnInit, OnDestroy } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Realisation } from '../_models/realisation.model';
import { RealisationService } from '../_services/realisation.service';
import { SousDomaine } from '../_models/sous-domaine.model';
import { SousDomaineService } from '../_services/sous-domaine.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-realisations',
  templateUrl: './realisations.component.html',
  styleUrls: ['./realisations.component.scss']
})
export class RealisationsComponent implements OnInit, OnDestroy {

  title: string;
  sousDomaine: SousDomaine;
  realisations: Realisation[];
  realisationSubscription: Subscription;
  sousDomaineSubscription: Subscription;
  showSpinner = true;
  showEmptyMessage = false;

  constructor(private route: ActivatedRoute, private realisationService: RealisationService, private sousDomaineService: SousDomaineService) { }

  ngOnInit() {
    let sousDomaineId = this.route.snapshot.params['sous-domaine'];

    this.realisationSubscription = this.realisationService.subject.subscribe(
      realisations => {
        this.realisations = realisations.filter(
          x => x.sousDomaine.id === sousDomaineId
        );
        
        if(this.realisations.length == 0) {
          this.sousDomaineService.subject.subscribe(
            sousDomaines => {
              this.sousDomaine = sousDomaines.find(
                x => x.id === sousDomaineId
              );

              this.showEmptyMessage = true;
              this.showSpinner = false;
            }
          );
          this.sousDomaineService.getAll();
          
        } else {
          this.sousDomaine = this.realisations[0].sousDomaine;
          this.showSpinner = false;
        }

        
      }
    );

    this.realisationService.getAll();

  }

  getUrl(realisation: Realisation) {
    this.realisationService.getUrl(realisation);
  }

  ngOnDestroy() {
    this.realisationSubscription.unsubscribe();
    if(this.sousDomaineSubscription) {
      this.sousDomaineSubscription.unsubscribe();
    }
  }
}
