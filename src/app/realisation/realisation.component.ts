import { Component, OnInit, OnDestroy } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Realisation } from '../_models/realisation.model';
import { RealisationService } from '../_services/realisation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-realisation',
  templateUrl: './realisation.component.html',
  styleUrls: ['./realisation.component.scss']
})
export class RealisationComponent implements OnInit, OnDestroy {

  realisation: Realisation;
  realisationSubscription: Subscription;
  showSpinner = true;

  constructor(
    private route: ActivatedRoute,
    private realisationService: RealisationService
    ) { }

  ngOnInit() {
      var id: number = +(this.route.snapshot.params['id']);

      this.realisationSubscription = this.realisationService.subject.subscribe(
        realisations => {
          this.realisation = realisations.find(x => x.id == id);
          this.showSpinner = false;
        }
      )

      this.realisationService.getAll();
  }

  ngOnDestroy() {
    this.realisationSubscription.unsubscribe();
  }
}
