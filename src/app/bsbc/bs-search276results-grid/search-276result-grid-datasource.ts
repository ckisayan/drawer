import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';


import {MatTableDataSource} from '@angular/material/table';
import { Search276ResultsGrid } from './search276results-grid';

const Search276ResultsGrid_EXAMPLE_DATA: Search276ResultsGrid[] = [    
  { SystemId: '123456', TraceNumber: '12132b332cc333', ProviderClaimNumber: '12345', PayerClaimNumber: '4564464', ClaimChargeAmt: "$599.65" },
  { SystemId: '223457', TraceNumber: '32132b332cc334', ProviderClaimNumber: '22346', PayerClaimNumber: '6564463', ClaimChargeAmt: "$699.65" },
  { SystemId: '323458', TraceNumber: '42132b332cc335', ProviderClaimNumber: '32347', PayerClaimNumber: '7564462', ClaimChargeAmt: "$799.67" },
  { SystemId: '423459', TraceNumber: '52132b332cc336', ProviderClaimNumber: '42348', PayerClaimNumber: '8564461', ClaimChargeAmt: "$899.68" },

];

/**
 * Data source for the DataTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class Search276ResultsGridDataSource extends DataSource<Search276ResultsGrid> {
  data: Search276ResultsGrid[] = [...Search276ResultsGrid_EXAMPLE_DATA];
  //data =new MatTableDataSource(ITEM_EXAMPLE_DATA);
  
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor() {
    super();
  }
  
  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Search276ResultsGrid[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: Search276ResultsGrid[]): Search276ResultsGrid[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: Search276ResultsGrid[]): Search276ResultsGrid[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'SystemId': return compare(a.SystemId, b.SystemId, isAsc);
        case 'ClaimChargeAmt': return compare(+a.ClaimChargeAmt, +b.ClaimChargeAmt, isAsc);
        case 'ProviderClaimNumber': return compare(+a.ProviderClaimNumber, +b.ProviderClaimNumber, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
