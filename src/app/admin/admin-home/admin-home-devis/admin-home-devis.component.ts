import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Devis } from 'src/app/models/devis.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { DevisService } from 'src/app/services/devis.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/dialog/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-admin-home-devis',
  templateUrl: './admin-home-devis.component.html',
  styleUrls: ['./admin-home-devis.component.scss']
})
export class AdminHomeDevisComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nom', 'prenom', 'telephone', 'action'];

  listDevis: Devis[];
  dataSource: MatTableDataSource<Devis>;
  showDetails: boolean = false;
  currentDevis: Devis;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(private devisService: DevisService, private dialog: MatDialog) { }

  ngOnInit() {
    this.listDevis = this.devisService.getListDevis();
    this.dataSource = new MatTableDataSource(this.listDevis);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  openDelete(devis: Devis) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {texte: 'Es-tu sûr de vouloir supprimer le devis n°' + devis.id + ' ?'}
    });

    dialogRef.afterClosed().subscribe(
      result => {
        if(result) {
          this.devisService.deleteDevis(devis);
        }
      }
    );
  }

  openEdit(devis: Devis) {

  }

  openDetails(devis: Devis) {
    this.currentDevis = devis;
    this.showDetails = true;
  }

  back() {
    this.currentDevis = null;
    this.showDetails = false;
  }
}
