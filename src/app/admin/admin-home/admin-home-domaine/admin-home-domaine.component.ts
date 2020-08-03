import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { DomaineService } from 'src/app/_services/domaine.service';
import { Domaine } from 'src/app/_models/domaine.model';
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

  domaines: Domaine[];
  domaineSubscription: Subscription;

  dataSource: MatTableDataSource<Domaine>;
  showDetails: boolean = false;
  showUpdate: boolean = false;
  currentDomaine: Domaine;

  @ViewChild(MatSort) sort: MatSort;
  
  constructor(private domaineService: DomaineService) { }

  ngOnInit() {
    this.domaineSubscription = this.domaineService.subject.subscribe(
      domaines => {
        this.domaines = domaines;
        this.dataSource = new MatTableDataSource(this.domaines);
        this.dataSource.sort = this.sort;
      },
      error => console.log(error),
      () => console.log('Observable complete')
    );

      this.domaineService.emitSubject();
  }

  openDetails(domaine: Domaine) {
    this.currentDomaine = domaine;
    this.showDetails = true;
  }

  openUpdate(domaine: Domaine) {
    this.currentDomaine = domaine;
    this.showUpdate = true;
  }

  back() {
    this.currentDomaine = null;
    this.showDetails = false;
    this.showUpdate = false;
  }

  ngOnDestroy(): void {
    this.domaineSubscription.unsubscribe();
  }

}
