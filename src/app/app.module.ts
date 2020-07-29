import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { DevisComponent } from './devis/devis.component';
import { DomaineInterventionService } from './services/domaine-intervention.service';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeCarrouselComponent } from './home/home-carrousel/home-carrousel.component';
import { HomeComponent } from './home/home.component';
import { HomeInterventionComponent } from './home/home-intervention/home-intervention.component';
import { HomeRealisationComponent } from './home/home-realisation/home-realisation.component';
import { InterventionComponent } from './intervention/intervention.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RealisationComponent } from './realisation/realisation.component';
import { RealisationService } from './services/realisation.service';
import { RealisationsComponent } from './realisations/realisations.component';
import { SlideshowModule } from 'ng-simple-slideshow';
import { SousDomaineInterventionService } from './services/sous-domaine-intervention.service';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { WhoComponent } from './who/who.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { AdminComponent } from './admin/admin.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AdminHomeDevisComponent } from './admin/admin-home/admin-home-devis/admin-home-devis.component';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './dialog/confirm-dialog/confirm-dialog.component';
import { DetailDialogComponent } from './dialog/detail-dialog/detail-dialog.component';
import { AdminHomeDevisDetailComponent } from './admin/admin-home/admin-home-devis-detail/admin-home-devis-detail.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeCarrouselComponent,
    HomeInterventionComponent,
    RealisationComponent,
    FooterComponent,
    DevisComponent,
    HomeComponent,
    WhoComponent,
    BreadcrumbComponent,
    RealisationsComponent,
    HomeRealisationComponent,
    InterventionComponent,
    ComingSoonComponent,
    AdminComponent,
    AdminLoginComponent,
    AdminHomeComponent,
    AdminHomeDevisComponent,
    ConfirmDialogComponent,
    DetailDialogComponent,
    AdminHomeDevisDetailComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatMenuModule,
    MatButtonModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatRadioModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule,
    DeviceDetectorModule,
    MatSidenavModule,
    SlideshowModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    DomaineInterventionService,
    SousDomaineInterventionService,
    RealisationService
  ],
  entryComponents: [ConfirmDialogComponent, DetailDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }


