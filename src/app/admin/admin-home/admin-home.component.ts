import { Component, OnInit, ViewChild } from '@angular/core';
import { DevisService } from 'src/app/_services/devis.service';
import { Devis } from 'src/app/_models/devis.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { AuthService } from 'src/app/_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.authService.signOut();
    this.router.navigate(['admin']);
  }
}
