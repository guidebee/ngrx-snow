import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ROUTE_ANIMATIONS_ELEMENTS } from '@app/core';
import { Observable, Subject } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ServiceCatalogue } from '@app/service-catalogue/service-catalogue.data';
import { MatAutocompleteSelectedEvent } from '@angular/material';

@Component({
  selector: 'bhpfd-searchbar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBarComponent implements OnInit {
  @Input()
  serviceCatalogues: ServiceCatalogue[];

  @Output()
  searchAction = new EventEmitter<string>();

  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  newSearch = '';
  filteredServiceCatalogues: Observable<ServiceCatalogue[]>;
  searchTerm$ = new Subject<string>();

  constructor(public translateService: TranslateService) {}

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

  get isSearchDisabled() {
    return this.newSearch.length < 4;
  }

  onNewSearchChange(newSearch: string) {
    this.setSearchTerm(newSearch);
  }

  onNewSearchClear() {
    this.setSearchTerm('');
  }

  chooseServiceCatalogue(event: MatAutocompleteSelectedEvent) {
    this.setSearchTerm(event.option.value);
  }

  onNewSearch() {
    this.searchAction.emit(this.newSearch);
    this.setSearchTerm('');
  }

  setSearchTerm(searchTerm: string) {
    this.newSearch = searchTerm;
    this.searchTerm$.next(searchTerm);
  }
}
