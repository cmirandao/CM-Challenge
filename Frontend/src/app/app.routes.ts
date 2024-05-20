import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'newJob',
        loadChildren: () => import('./pages/newposition/newposition.module').then(m => m.NewpositionModule)
    },
    {
        path: 'newJobApp',
        loadChildren: () => import('./pages/newjob/newjob.module').then(m => m.NewjobModule)
    },
];
