import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../app/pages/dashboard/dashboard.component').then(
        (mod) => mod.DashboardComponent
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      import('../app/shared/components/not-found/not-found.component').then(
        (mod) => mod.NotFoundComponent
      ),
  },
];
