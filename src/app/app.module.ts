import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CarrouselComponent } from './home/carrousel/carrousel.component';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { DevisComponent } from './devis/devis.component';
import { DomaineInterventionService } from './services/domaine-intervention.service';
import { ExtensionComponent } from './extension/extension.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HomeInterventionComponent } from './home/home-intervention/home-intervention.component';
import { HomeRealisationComponent } from './home/home-realisation/home-realisation.component';
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
import { MenuiserieComponent } from './menuiserie/menuiserie.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RealisationComponent } from './realisation/realisation.component';
import { RealisationService } from './services/realisation.service';
import { RealisationsComponent } from './realisations/realisations.component';
import { RenovationComponent } from './renovation/renovation.component';
import { SousDomaineInterventionService } from './services/sous-domaine-intervention.service';
import { SubheaderComponent } from './subheader/subheader.component';
import { WhoComponent } from './who/who.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarrouselComponent,
    HomeInterventionComponent,
    RealisationComponent,
    FooterComponent,
    DevisComponent,
    HomeComponent,
    ExtensionComponent,
    RenovationComponent,
    WhoComponent,
    BreadcrumbComponent,
    MenuiserieComponent,
    SubheaderComponent,
    RealisationsComponent,
    HomeRealisationComponent
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
    ReactiveFormsModule,
    MatInputModule,
    MatRadioModule,
    DeviceDetectorModule,
    MatSidenavModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR' },
    DomaineInterventionService,
    SousDomaineInterventionService,
    RealisationService
  ],
    
  bootstrap: [AppComponent]
})
export class AppModule { }
