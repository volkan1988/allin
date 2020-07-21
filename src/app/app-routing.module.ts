import { RouterModule, Routes } from '@angular/router';

import { DevisComponent } from './devis/devis.component';
import { ExtensionComponent } from './extension/extension.component';
import { HomeComponent } from './home/home.component';
import { MenuiserieComponent } from './menuiserie/menuiserie.component';
import { NgModule } from '@angular/core';
import { RealisationComponent } from './realisation/realisation.component';
import { RealisationsComponent } from './realisations/realisations.component';
import { RenovationComponent } from './renovation/renovation.component';
import { WhoComponent } from './who/who.component';

export const routes: Routes = [
    {
        path: 'extension',
        component: ExtensionComponent
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
        component: RenovationComponent
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
        component: MenuiserieComponent
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