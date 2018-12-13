import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiceCatalogueContainerComponent } from './components/service-catalogue-container.component';

const routes: Routes = [
  {
    path: 'catalogue',
    component: ServiceCatalogueContainerComponent,
    data: { title: 'bhpfd.menu.service.catalogue' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceCatalogueRoutingModule {}
