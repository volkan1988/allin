import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Realisation } from 'src/app/models/realisation.model';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { RealisationService } from 'src/app/services/realisation.service';

@Component({
  selector: 'app-admin-home-realisation',
  templateUrl: './admin-home-realisation.component.html',
  styleUrls: ['./admin-home-realisation.component.scss']
})
export class AdminHomeRealisationComponent implements OnInit {


  displayedColumns: string[] = ['id', 'libelle', 'sousDomaine', 'domaine', 'action'];

  realisations: Realisation[];
  dataSource: MatTableDataSource<Realisation>;
  showForm: boolean = false;
  currentRealisation: Realisation;
  formType: string;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(private realisationService: RealisationService) { }

  ngOnInit() {
    this.realisations = this.realisationService.realisations;
    this.dataSource = new MatTableDataSource(this.realisations);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filterPredicate = (data, filter) => JSON.stringify(data).includes(filter);
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openForm(formType: string, currentRealisation ?: Realisation) {
    this.formType = formType;
    currentRealisation ? this.currentRealisation = currentRealisation : this.currentRealisation = null;
    this.showForm = true;
  }

  back() {
    this.currentRealisation = null;
    this.showForm = false;
    this.formType = '';
  }

}
