import { RouterModule, Routes } from '@angular/router';

import { DevisComponent } from './devis/devis.component';
import { ExtensionComponent } from './extension/extension.component';
import { HomeComponent } from './home/home.component';
import { MenuiserieComponent } from './menuiserie/menuiserie.component';
import { NgModule } from '@angular/core';
import { RenovationComponent } from './renovation/renovation.component';
import { WhoComponent } from './who/who.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'extension',
        component: ExtensionComponent
    },
    {
        path: 'extension/:sous-domaine',
        component: ExtensionComponent
    },
    {
        path: 'extension/:sous-domaine/:id',
        component: ExtensionComponent
    },
    {
        path: 'renovation-interieure',
        component: RenovationComponent
    },
    {
        path: 'renovation-interieure/:sous-domaine',
        component: RenovationComponent
    },
    {
        path: 'renovation-interieure/:sous-domaine/:id',
        component: RenovationComponent
    },
    {
        path: 'menuiserie-exterieure',
        component: MenuiserieComponent
    },
    {
        path: 'menuiserie-exterieure/:sous-domaine',
        component: MenuiserieComponent
    },
    {
        path: 'menuiserie-exterieure/:sous-domaine/:id',
        component: MenuiserieComponent
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
        path: '**',
        redirectTo: '/'
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