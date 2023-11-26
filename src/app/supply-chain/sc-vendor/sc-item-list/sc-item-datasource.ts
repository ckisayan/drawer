import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { PurchaseItem } from '../sc-vendor-list/purchaseitem';

import {MatTableDataSource} from '@angular/material/table';
// TODO: replace this with real data from your application
const ITEM_EXAMPLE_DATA: PurchaseItem[] = [    
    { ItemNumber: '111', ItemShortDesc: 'Widget A', UnitPriceAmt: '20.00', ItemQuanity: "",VendorNumber: 'V001' },
    { ItemNumber: '112', ItemShortDesc: 'Gadget B', UnitPriceAmt: '15.50', ItemQuanity: "",VendorNumber: 'V002' },
    { ItemNumber: '113', ItemShortDesc: 'Tool C', UnitPriceAmt: '30.75', ItemQuanity: "",VendorNumber: 'V003' },
];

/**
 * Data source for the DataTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ScItemDataSource extends DataSource<PurchaseItem> {
  data: PurchaseItem[] = [...ITEM_EXAMPLE_DATA];
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
  connect(): Observable<PurchaseItem[]> {
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
  private getPagedData(data: PurchaseItem[]): PurchaseItem[] {
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
  private getSortedData(data: PurchaseItem[]): PurchaseItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'ItemShortDesc': return compare(a.ItemShortDesc, b.ItemShortDesc, isAsc);
        case 'ItemNumber': return compare(+a.ItemNumber, +b.ItemNumber, isAsc);
        case 'UnitPriceAmt': return compare(+a.UnitPriceAmt, +b.UnitPriceAmt, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
