import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { SousDomaine } from 'src/app/_models/sous-domaine.model';
import { MatTableDataSource } from '@angular/material/table';
import { SousDomaineService } from 'src/app/_services/sous-domaine.service';
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

  sousDomaines: SousDomaine[];
  sousDomaineSubscription: Subscription;

  dataSource: MatTableDataSource<SousDomaine>;
  showForm: boolean = false;
  currentSousDomaine: SousDomaine;
  formType: string;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private sousDomaineService: SousDomaineService) { }

  ngOnInit() {
    this.sousDomaineSubscription = this.sousDomaineService.subject.subscribe(
      sousDomaines => {
        this.sousDomaines = sousDomaines;
        this.dataSource = new MatTableDataSource(this.sousDomaines);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error => console.log(error),
      () => console.log('Subscribe complete')
    );

    this.sousDomaineService.getToServer();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filterPredicate = (data, filter) => JSON.stringify(data).includes(filter);
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openForm(formType: string, currentSousDomaine?: SousDomaine) {
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
    this.sousDomaineSubscription.unsubscribe();
  }
}
