import { Action } from '@ngrx/store';
import {
  ServiceCatalogueActions,
  ServiceCatalogueActionTypes
} from './service-catalogue.actions';

export interface State {}

export const initialState: State = {};

export function reducer(
  state = initialState,
  action: ServiceCatalogueActions
): State {
  switch (action.type) {
    case ServiceCatalogueActionTypes.LoadServiceCatalogues:
      return state;

    default:
      return state;
  }
}
