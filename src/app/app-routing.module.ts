import { RouterModule, Routes } from '@angular/router';

import { DevisComponent } from './devis/devis.component';
import { HomeComponent } from './home/home.component';
import { InterventionComponent } from './intervention/intervention.component';
import { NgModule } from '@angular/core';
import { RealisationComponent } from './realisation/realisation.component';
import { RealisationsComponent } from './realisations/realisations.component';
import { WhoComponent } from './who/who.component';

export const routes: Routes = [
    {
        path: 'extension',
        component: InterventionComponent
    },
    {
        path: 'extension/:sous-domaine',
        component: RealisationsComponent
    },
    {
        path: 'extension/:sous-domaine/:id',
        component: RealisationComponent
    },
    {
        path: 'renovation-interieure',
        component: InterventionComponent
    },
    {
        path: 'renovation-interieure/:sous-domaine',
        component: RealisationsComponent
    },
    {
        path: 'renovation-interieure/:sous-domaine/:id',
        component: RealisationComponent
    },
    {
        path: 'menuiserie-exterieure',
        component: InterventionComponent
    },
    {
        path: 'menuiserie-exterieure/:sous-domaine',
        component: RealisationsComponent
    },
    {
        path: 'menuiserie-exterieure/:sous-domaine/:id',
        component: RealisationComponent
    },
    {
        path: 'presentation',
        component: WhoComponent
    },
    {
        path: 'devis',
        component: DevisComponent
    },
    {
        path: '',
        component: HomeComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forRoot(routes)
    ]
})
export class AppRoutingModule {
}