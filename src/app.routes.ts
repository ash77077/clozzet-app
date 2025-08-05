import { Routes } from '@angular/router';
import { AppLayoutComponent } from '@layout/component/app.layout';
import { Notfound } from '@pages/notfound/notfound';
import { allRoles } from '@core/constants';
import { authGuard } from '@core/guards/auth.guard';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/landing2',
    pathMatch: 'full'
  },
  {
    path: 'landing2',
    loadComponent: () => import('./app/modules/landing/components/landing2/landing2.component').then(m => m.Landing2Component)
  },
  {
    path: 'products',
    loadComponent: () => import('./app/pages/products/products.component').then(m => m.ProductsComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./app/pages/about/about.component').then(m => m.AboutComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./app/pages/contact/contact.component').then(m => m.ContactComponent)
  },
  {
    path: 'services',
    loadComponent: () => import('./app/pages/services/services.component').then(m => m.ServicesComponent)
  },
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
  { path: '**', redirectTo: '/landing2' },
];
