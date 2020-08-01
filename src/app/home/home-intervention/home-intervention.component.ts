import { Component, OnInit, OnDestroy } from '@angular/core';
import { DomaineIntervention } from 'src/app/models/domaine-intervention.model';
import { DomaineInterventionService } from 'src/app/services/domaine-intervention.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-intervention',
  templateUrl: './home-intervention.component.html',
  styleUrls: ['./home-intervention.component.scss']
})
export class HomeInterventionComponent implements OnInit, OnDestroy {

  interventions: DomaineIntervention[];
  interventionsSubscription: Subscription;

  constructor(private domaineInterventionService: DomaineInterventionService) { }

  ngOnInit() {
    this.interventionsSubscription = this.domaineInterventionService.subject.subscribe(
      interventions => this.interventions = interventions,
      error => console.log(error),
      () => console.log('Observable complete')
    );

    this.domaineInterventionService.emitSubject();
  }


  ngOnDestroy(): void {
    this.interventionsSubscription.unsubscribe();
  }
}
