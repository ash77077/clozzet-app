import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CatalogListComponent} from "@modules/landing/components/catalog-list/catalog-list.component";
import {Landing2Component} from "@modules/landing/components/landing2/landing2.component";

const routes: Routes = [
  {
    path: '',
    component: Landing2Component,
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
