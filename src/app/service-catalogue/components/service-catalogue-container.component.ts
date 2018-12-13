import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {
  ServiceCatalogue,
  serviceCatalogues
} from '@app/service-catalogue/service-catalogue.data';
import { Observable, Subject } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'bhpfd-service-catalogue-container',
  templateUrl: './service-catalogue-container.component.html',
  styleUrls: ['./service-catalogue-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServiceCatalogueContainerComponent implements OnInit {
  serviceCatalogues: ServiceCatalogue[] = serviceCatalogues;

  filteredServiceCatalogues: Observable<ServiceCatalogue[]>;
  searchTerm$ = new Subject<string>();

  constructor() {}

  ngOnInit() {
    this.filteredServiceCatalogues = this.searchTerm$.pipe(
      startWith(''),
      map(state =>
        state ? this._filterStates(state) : this.serviceCatalogues.slice()
      )
    );
  }

  private _filterStates(value: string): ServiceCatalogue[] {
    const filterValue = value.toLowerCase();

    return this.serviceCatalogues.filter(
      state => state.text.toLowerCase().indexOf(filterValue) === 0
    );
  }

  searchService(searchTerm: string) {
    this.searchTerm$.next(searchTerm);
  }
}
