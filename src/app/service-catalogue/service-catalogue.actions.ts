import { Action } from '@ngrx/store';

export enum ServiceCatalogueActionTypes {
  LoadServiceCatalogues = '[ServiceCatalogue] Load ServiceCatalogues'
}

export class LoadServiceCatalogues implements Action {
  readonly type = ServiceCatalogueActionTypes.LoadServiceCatalogues;
}

export type ServiceCatalogueActions = LoadServiceCatalogues;
