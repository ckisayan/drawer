import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface DataTableExistingPO {    
  PONumber: string;
  OrderDate: string;
  OrderAmt: string
  POStatus: string;
  VendorNubmer: string;
  VendorName: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: DataTableExistingPO[] = [
  
  { PONumber: 'PO123', OrderDate: '2023-01-01', OrderAmt: '5000.00', POStatus: 'Open', VendorNubmer: 'V123', VendorName: 'Vendor A' },
  { PONumber: 'PO456', OrderDate: '2023-02-15', OrderAmt: '8000.00', POStatus: 'Closed', VendorNubmer: 'V456', VendorName: 'Vendor B' },
  { PONumber: 'PO789', OrderDate: '2023-03-20', OrderAmt: '12000.00', POStatus: 'Open', VendorNubmer: 'V789', VendorName: 'Vendor C' },
  { PONumber: 'PO101', OrderDate: '2023-04-05', OrderAmt: '3500.00', POStatus: 'Pending', VendorNubmer: 'V101', VendorName: 'Vendor D' },
  { PONumber: 'PO202', OrderDate: '2023-05-12', OrderAmt: '6000.00', POStatus: 'Closed', VendorNubmer: 'V202', VendorName: 'Vendor E' },
  { PONumber: 'PO303', OrderDate: '2023-06-25', OrderAmt: '9000.00', POStatus: 'Open', VendorNubmer: 'V303', VendorName: 'Vendor F' },
  { PONumber: 'PO404', OrderDate: '2023-07-08', OrderAmt: '4800.00', POStatus: 'Pending', VendorNubmer: 'V404', VendorName: 'Vendor G' },
  { PONumber: 'PO505', OrderDate: '2023-08-14', OrderAmt: '7500.00', POStatus: 'Closed', VendorNubmer: 'V505', VendorName: 'Vendor H' },
  { PONumber: 'PO606', OrderDate: '2023-09-21', OrderAmt: '3000.00', POStatus: 'Open', VendorNubmer: 'V606', VendorName: 'Vendor I' },
  { PONumber: 'PO707', OrderDate: '2023-10-30', OrderAmt: '4200.00', POStatus: 'Closed', VendorNubmer: 'V707', VendorName: 'Vendor J' }

];

/**
 * Data source for the DataTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ScExistingPoDataSource extends DataSource<DataTableExistingPO> {
  data: DataTableExistingPO[] = EXAMPLE_DATA;
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
  connect(): Observable<DataTableExistingPO[]> {
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
  private getPagedData(data: DataTableExistingPO[]): DataTableExistingPO[] {
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
  private getSortedData(data: DataTableExistingPO[]): DataTableExistingPO[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'VendorName': return compare(a.VendorName, b.VendorName, isAsc);
        case 'PONumber': return compare(+a.PONumber, +b.PONumber, isAsc);
        case 'OrderAmt': return compare(+a.OrderAmt, +b.OrderAmt, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
