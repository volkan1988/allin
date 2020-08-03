import { Component, OnInit, OnDestroy } from '@angular/core';
import { Domaine } from 'src/app/_models/domaine.model';
import { DomaineService } from 'src/app/_services/domaine.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-intervention',
  templateUrl: './home-intervention.component.html',
  styleUrls: ['./home-intervention.component.scss']
})
export class HomeInterventionComponent implements OnInit, OnDestroy {

  interventions: Domaine[];
  interventionsSubscription: Subscription;

  constructor(private domaineService: DomaineService) { }

  ngOnInit() {
    this.interventionsSubscription = this.domaineService.subject.subscribe(
      interventions => this.interventions = interventions,
      error => console.log(error),
      () => console.log('Observable complete')
    );

    this.domaineService.emitSubject();
  }


  ngOnDestroy(): void {
    this.interventionsSubscription.unsubscribe();
  }
}
