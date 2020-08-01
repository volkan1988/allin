import { Component, OnInit, ViewChild, Inject, OnDestroy } from '@angular/core';
import { Devis } from 'src/app/models/devis.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { DevisService } from 'src/app/services/devis.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/dialog/confirm-dialog/confirm-dialog.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-home-devis',
  templateUrl: './admin-home-devis.component.html',
  styleUrls: ['./admin-home-devis.component.scss']
})
export class AdminHomeDevisComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['id', 'nom', 'prenom', 'telephone', 'action'];

  listDevis: Devis[];
  devisSubscription: Subscription;

  dataSource: MatTableDataSource<Devis>;
  showDetails: boolean = false;
  showUpdate: boolean = false;
  currentDevis: Devis;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(private devisService: DevisService, private dialog: MatDialog) { }

  ngOnInit() {
    this.devisSubscription = this.devisService.subject.subscribe(
      listDevis => {
        this.listDevis = listDevis;
        this.dataSource = new MatTableDataSource(this.listDevis);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error => console.log(error),
      () => console.log('Subscribe complete')
    );

    this.devisService.emitSubject();
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
          this.devisService.delete(devis);
        }
      }
    );
  }

  openUpdate(devis: Devis) {
    this.currentDevis = devis;
    this.showUpdate = true;
  }

  openDetails(devis: Devis) {
    this.currentDevis = devis;
    this.showDetails = true;
  }

  back() {
    this.currentDevis = null;
    this.showDetails = false;
    this.showUpdate = false;
  }

  ngOnDestroy(): void {
    this.devisSubscription.unsubscribe();
  }
}
