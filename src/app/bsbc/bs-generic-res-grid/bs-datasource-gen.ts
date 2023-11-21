import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface DataTableItemGen {  
  Name: string;
  SystemID: string;
  Msg: string;
  ValidationStatus: string;
  TransactionType: string;
  Actions: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: DataTableItemGen[] = [
  {Name: "file name1", SystemID: '00444', Msg: "270 Eligibility sent to WMB",  ValidationStatus: "Accept", TransactionType: "270x12", Actions:''},
  {Name: "file name2", SystemID: '00234', Msg: "271 Eligibility response sent to Sterling TP", ValidationStatus: "Accept", TransactionType: "271x12", Actions:''}, 
  {Name: "file name3", SystemID: '00160', Msg: "270 Placed in Edifecs queue",  ValidationStatus: "Reject", TransactionType: "270x12", Actions:''}, 
  {Name: "file name4", SystemID: '00161', Msg: "270 Response received from WMB",  ValidationStatus: "Reject", TransactionType: "271x12", Actions:''}, 
  {Name: "file Name5", SystemID: '00162', Msg: "271 Ready to go",  ValidationStatus: "Reject", TransactionType: "271x12", Actions:''}, 
  {Name: "file name6", SystemID: '00163', Msg: "270 Passed eligibility chk",  ValidationStatus: "Accept", TransactionType: "270x12", Actions:''},
];

/**
 * Data source for the DataTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class DataSourceGen extends DataSource<DataTableItemGen> {
  data: DataTableItemGen[] = EXAMPLE_DATA;
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
  connect(): Observable<DataTableItemGen[]> {
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
  private getPagedData(data: DataTableItemGen[]): DataTableItemGen[] {
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
  private getSortedData(data: DataTableItemGen[]): DataTableItemGen[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'Name': return compare(a.Name, b.Name, isAsc);
        case 'SystemID': return compare(+a.SystemID, +b.SystemID, isAsc);
        case 'Msg': return compare(+a.Msg, +b.Msg, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
