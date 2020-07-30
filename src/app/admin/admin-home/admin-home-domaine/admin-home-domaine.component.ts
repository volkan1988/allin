import { Component, OnInit, ViewChild } from '@angular/core';
import { DomaineInterventionService } from 'src/app/services/domaine-intervention.service';
import { DomaineIntervention } from 'src/app/models/domaine-intervention.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-admin-home-domaine',
  templateUrl: './admin-home-domaine.component.html',
  styleUrls: ['./admin-home-domaine.component.scss']
})
export class AdminHomeDomaineComponent implements OnInit {
  displayedColumns: string[] = ['id', 'libelle', 'action'];

  domaines: DomaineIntervention[];
  dataSource: MatTableDataSource<DomaineIntervention>;
  showDetails: boolean = false;
  showUpdate: boolean = false;
  currentDomaine: DomaineIntervention;

  @ViewChild(MatSort) sort: MatSort;
  
  constructor(private domaineInterventionService: DomaineInterventionService) { }

  ngOnInit() {
    this.domaines = this.domaineInterventionService.domainesIntervention;
    this.dataSource = new MatTableDataSource(this.domaines);
    this.dataSource.sort = this.sort;
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

}
