import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { SousDomaineIntervention } from 'src/app/models/sous-domaine-intervention.model';
import { MatTableDataSource } from '@angular/material/table';
import { SousDomaineInterventionService } from 'src/app/services/sous-domaine-intervention.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-home-sous-domaine',
  templateUrl: './admin-home-sous-domaine.component.html',
  styleUrls: ['./admin-home-sous-domaine.component.scss']
})
export class AdminHomeSousDomaineComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['id', 'libelle', 'domaine', 'action'];

  sousDomaines: SousDomaineIntervention[];
  sousDomaineInterventionSubscription : Subscription;

  dataSource: MatTableDataSource<SousDomaineIntervention>;
  showForm: boolean = false;
  currentSousDomaine: SousDomaineIntervention;
  formType: string;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(private sousDomaineInterventionService: SousDomaineInterventionService) { }

  ngOnInit() {
    this.sousDomaineInterventionSubscription = this.sousDomaineInterventionService.subject.subscribe(
      sousDomaines => {
        this.sousDomaines = sousDomaines;
        this.dataSource = new MatTableDataSource(this.sousDomaines);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error => console.log(error),
      () => console.log('Subscribe complete')
    );

    this.sousDomaineInterventionService.emitSubject();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filterPredicate = (data, filter) => JSON.stringify(data).includes(filter);
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openForm(formType: string, currentSousDomaine ?: SousDomaineIntervention) {
    this.formType = formType;
    currentSousDomaine ? this.currentSousDomaine = currentSousDomaine : this.currentSousDomaine = null;
    this.showForm = true;
  }

  back() {
    this.currentSousDomaine = null;
    this.showForm = false;
    this.formType = '';
  }

  ngOnDestroy(): void {
    this.sousDomaineInterventionSubscription.unsubscribe();
  }

}
