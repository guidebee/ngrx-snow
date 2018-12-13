import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ServiceCatalogueActionTypes } from './service-catalogue.actions';

@Injectable()
export class ServiceCatalogueEffects {
  @Effect()
  loadFoos$ = this.actions$.pipe(
    ofType(ServiceCatalogueActionTypes.LoadServiceCatalogues)
  );

  constructor(private actions$: Actions) {}
}
