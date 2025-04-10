import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Dashboard} from '@pages/dashboard/dashboard';

const routes: Routes = [
  {
    path: '',
    component: Dashboard,
  },
  {
    path: 'products',
    loadChildren: () => import('../products/product-routing.module').then((m) => m.ProductRoutingModule),
  },
  {
    path: 'categories',
    loadChildren: () => import('../categories/categories-routing.module').then((m) => m.CategoriesRoutingModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {
}
