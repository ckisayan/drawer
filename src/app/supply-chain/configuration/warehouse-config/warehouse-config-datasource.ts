import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { WarehouseConfig } from './WarehouseConfig';

// TODO: replace this with real data from your application
export const EXAMPLE_WAREHOUSE_CONFIG_DATA: WarehouseConfig[] = [ 
  
  {WarehouseID: "1", WarehouseName: "Bunzl East", CompanyName: "Bunzl USA", WarehouseRegion: "East", WarehouseLocation: "Cityville", WarehouseAddressLine1: "123 Main Street", WarehouseAddressLine2: "Suite 456"},
  {WarehouseID: "2", WarehouseName: "Bunzl West", CompanyName: "Bunzl USA", WarehouseRegion: "West", WarehouseLocation: "Townsville",WarehouseAddressLine1: "789 Oak Avenue", WarehouseAddressLine2: "Floor 2"},
  {WarehouseID: "3", WarehouseName: "Bunzl Central", CompanyName: "Bunzl USA", WarehouseRegion: "Central", WarehouseLocation: "Metropolis", WarehouseAddressLine1: "456 Elm Street", WarehouseAddressLine2: "Unit 789"}

];

/**
 * Data source for the DataTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ScWarehouseConfigDataSource extends DataSource<WarehouseConfig> {
  data: WarehouseConfig[] = EXAMPLE_WAREHOUSE_CONFIG_DATA;
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
  connect(): Observable<WarehouseConfig[]> {
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
  private getPagedData(data: WarehouseConfig[]): WarehouseConfig[] {
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
  private getSortedData(data: WarehouseConfig[]): WarehouseConfig[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'WarehouseID': return compare(a.WarehouseID, b.WarehouseID, isAsc);
        case 'UWarehouseNameserName': return compare(a.WarehouseName, b.WarehouseName, isAsc);
        case 'WarehouseLocation': return compare(+a.WarehouseLocation, +b.WarehouseLocation, isAsc);
        case 'WarehouseRegion': return compare(+a.WarehouseRegion, +b.WarehouseRegion, isAsc);
        case 'CompanyName': return compare(+a.CompanyName, +b.CompanyName, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
