import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface DataTableProcurementConfig {    
  SystemResourceID: string;
  SystemResourceName: string;
  SystemResourceDesc: string;
}

// TODO: replace this with real data from your application
export const EXAMPLE_PRO_CONFIG_DATA: DataTableProcurementConfig[] = [
  
  {SystemResourceID: "1", SystemResourceName: 'Supplier_Management', SystemResourceDesc: 'AAllows users to search, view, and manage supplier information, including contact details and performance metrics.'},   
  {SystemResourceID: "2", SystemResourceName: 'New_Purchase_Order', SystemResourceDesc: 'Allows user to create new purchase order.'},
  {SystemResourceID: "3", SystemResourceName: 'PO_Approval_Workflow ', SystemResourceDesc: 'Approvers can review order details, make comments, and approve or reject the purchase order.'},
  {SystemResourceID: "4", SystemResourceName: 'PO_Tracking', SystemResourceDesc: 'Allows users to track the status of purchase orders in real-time.'},
  {SystemResourceID: "5", SystemResourceName: 'Catalog_Management', SystemResourceDesc: 'Users can browse, search, and select items from approved catalogs.'},
  {SystemResourceID: "6", SystemResourceName: 'Supplier_Performance_Evaluation ', SystemResourceDesc: 'Allows users to evaluate and track the performance of suppliers.'},

];

/**
 * Data source for the DataTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ScExistingPoDataSource extends DataSource<DataTableProcurementConfig> {
  data: DataTableProcurementConfig[] = EXAMPLE_PRO_CONFIG_DATA;
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
  connect(): Observable<DataTableProcurementConfig[]> {
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
  private getPagedData(data: DataTableProcurementConfig[]): DataTableProcurementConfig[] {
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
  private getSortedData(data: DataTableProcurementConfig[]): DataTableProcurementConfig[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'SystemResourceID': return compare(a.SystemResourceID, b.SystemResourceID, isAsc);
        case 'SystemResourceName': return compare(a.SystemResourceName, b.SystemResourceName, isAsc);
        case 'SystemResourceDesc': return compare(+a.SystemResourceDesc, +b.SystemResourceDesc, isAsc);        
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
