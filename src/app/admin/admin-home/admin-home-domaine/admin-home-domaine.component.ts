import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { DomaineInterventionService } from 'src/app/services/domaine-intervention.service';
import { DomaineIntervention } from 'src/app/models/domaine-intervention.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-home-domaine',
  templateUrl: './admin-home-domaine.component.html',
  styleUrls: ['./admin-home-domaine.component.scss']
})
export class AdminHomeDomaineComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['id', 'libelle', 'action'];

  domaines: DomaineIntervention[];
  domaineInterventionSubscription: Subscription;

  dataSource: MatTableDataSource<DomaineIntervention>;
  showDetails: boolean = false;
  showUpdate: boolean = false;
  currentDomaine: DomaineIntervention;

  @ViewChild(MatSort) sort: MatSort;
  
  constructor(private domaineInterventionService: DomaineInterventionService) { }

  ngOnInit() {
    this.domaineInterventionSubscription = this.domaineInterventionService.subject.subscribe(
      domaines => {
        this.domaines = domaines;
        this.dataSource = new MatTableDataSource(this.domaines);
        this.dataSource.sort = this.sort;
      },
      error => console.log(error),
      () => console.log('Observable complete')
    );

      this.domaineInterventionService.emitSubject();
  }

  openDetails(domaine: DomaineIntervention) {
    this.currentDomaine = domaine;
    this.showDetails = true;
  }

  openUpdate(domaine: DomaineIntervention) {
    this.currentDomaine = domaine;
    this.showUpdate = true;
  }

  back() {
    this.currentDomaine = null;
    this.showDetails = false;
    this.showUpdate = false;
  }

  ngOnDestroy(): void {
    this.domaineInterventionSubscription.unsubscribe();
  }
}
