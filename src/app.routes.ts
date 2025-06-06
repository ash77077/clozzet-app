import { Routes } from '@angular/router';
import { AppLayoutComponent } from '@layout/component/app.layout';
import { Notfound } from '@pages/notfound/notfound';
import { allRoles } from '@core/constants';
import { authGuard } from '@core/guards/auth.guard';

export const appRoutes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./app/modules/auth/auth-routing.module').then((m) => m.AuthRoutingModule),
  },
  {
    path: 'landing',
    loadChildren: () =>
      import('./app/modules/landing/landing-routing.module').then((m) => m.LandingRoutingModule),
  },
  {
    path: 'admin',
    component: AppLayoutComponent,
    loadChildren: () =>
      import('./app/modules/layout/layout-routing.module').then((m) => m.LayoutRoutingModule),
    canActivate: [authGuard],
    data: { roles: allRoles },
  },
  { path: 'notfound', component: Notfound },
  { path: '**', redirectTo: 'landing' },
];
