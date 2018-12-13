import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared';

import { ServiceCatalogueRoutingModule } from './service-catalogue-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromServiceCatalogue from './service-catalogue.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ServiceCatalogueEffects } from './service-catalogue.effects';
import { SearchBarComponent } from './components/search-bar.component';
import { SearchResultsComponent } from './components/search-results.component';
import { ServiceCatalogueContainerComponent } from './components/service-catalogue-container.component';

@NgModule({
  declarations: [
    SearchBarComponent,
    SearchResultsComponent,
    ServiceCatalogueContainerComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    ServiceCatalogueRoutingModule,

    StoreModule.forFeature('serviceCatalogue', fromServiceCatalogue.reducer),
    EffectsModule.forFeature([ServiceCatalogueEffects])
  ]
})
export class ServiceCatalogueModule {}
