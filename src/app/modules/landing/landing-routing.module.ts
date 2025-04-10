import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import {CatalogListComponent} from "@modules/landing/components/catalog-list/catalog-list.component";

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: ':id',
    component: CatalogListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingRoutingModule {}
