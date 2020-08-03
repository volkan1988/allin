import { Component, OnInit, OnDestroy } from '@angular/core';

import { Realisation } from '../../_models/realisation.model';
import { RealisationService } from '../../_services/realisation.service';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home-realisation',
  templateUrl: './home-realisation.component.html',
  styleUrls: ['./home-realisation.component.scss']
})
export class HomeRealisationComponent implements OnInit, OnDestroy {

  realisations: Realisation[];
  realisationSubscription: Subscription;

  constructor(private realisationService: RealisationService) { }

  ngOnInit() {

    this.realisationSubscription = this.realisationService.subject
    .pipe(
      map (
        val => val.slice(0,5)
      )
    )
    .subscribe(
      realisations => this.realisations = realisations,
      error => console.log(error),
      () => console.log('Observable complete')
    );

    this.realisationService.emitSubject();
  }

  ngOnDestroy(): void {
    this.realisationSubscription.unsubscribe();
  }

}
