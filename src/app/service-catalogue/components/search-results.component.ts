import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';
import { ServiceCatalogue } from '@app/service-catalogue/service-catalogue.data';

@Component({
  selector: 'bhpfd-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchResultsComponent implements OnInit {
  @Input()
  serviceCatalogues: ServiceCatalogue[];

  ngOnInit() {}
}
