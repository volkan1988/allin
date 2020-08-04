import { RouterModule, Routes } from '@angular/router';

import { DevisComponent } from './devis/devis.component';
import { HomeComponent } from './home/home.component';
import { InterventionComponent } from './intervention/intervention.component';
import { RealisationComponent } from './realisation/realisation.component';
import { RealisationsComponent } from './realisations/realisations.component';
import { WhoComponent } from './who/who.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AuthGuard } from './_helpers/auth.guard';

const routes: Routes = [
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
        path: 'admin',
        // canActivate: [AuthGuard],
        component: AdminHomeComponent
    },
    {
        path: 'admin-login',
        component: AdminLoginComponent
    },
    {
        path: 'admin-home',
        // canActivate: [AuthGuard],
        component: AdminHomeComponent
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

export const appRoutingModule = RouterModule.forRoot(routes);