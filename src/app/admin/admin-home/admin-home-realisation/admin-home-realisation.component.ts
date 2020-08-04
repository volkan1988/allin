import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Realisation } from 'src/app/_models/realisation.model';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { RealisationService } from 'src/app/_services/realisation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-home-realisation',
  templateUrl: './admin-home-realisation.component.html',
  styleUrls: ['./admin-home-realisation.component.scss']
})
export class AdminHomeRealisationComponent implements OnInit, OnDestroy {


  displayedColumns: string[] = ['id', 'libelle', 'sousDomaine', 'domaine', 'action'];

  realisations: Realisation[];
  realisationSubscription: Subscription;

  dataSource: MatTableDataSource<Realisation>;
  showForm: boolean = false;
  currentRealisation: Realisation;
  formType: string;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private realisationService: RealisationService) { }

  ngOnInit() {
    this.realisationSubscription = this.realisationService.subject.subscribe(
      realisations => {
        this.realisations = realisations;
        this.dataSource = new MatTableDataSource(this.realisations);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error => console.log(error),
      () => console.log('Subscribe complete')
    );

    this.realisationService.getAll();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filterPredicate = (data, filter) => JSON.stringify(data).includes(filter);
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openForm(formType: string, currentRealisation?: Realisation) {
    this.formType = formType;
    currentRealisation ? this.currentRealisation = currentRealisation : this.currentRealisation = null;
    this.showForm = true;
  }

  back() {
    this.currentRealisation = null;
    this.showForm = false;
    this.formType = '';
  }

  ngOnDestroy(): void {
    this.realisationSubscription.unsubscribe();
  }
}
