import { Component, OnInit, ViewChild } from '@angular/core';
import { DevisService } from 'src/app/services/devis.service';
import { Devis } from 'src/app/models/devis.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }
}
