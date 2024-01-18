import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface DataTableRolesConfig {    
    RoleID: string;
    RoleName: string;
    RoleType: string;
    RoleDesc: string;    
    RoleOwnerUserID: string;  
}

// TODO: replace this with real data from your application
export const EXAMPLE_ROLES_CONFIG_DATA: DataTableRolesConfig[] = [
  
  {RoleID: '1', RoleName: 'Admin', RoleType: 'Basic', RoleOwnerUserID: "system", RoleDesc: 'Can do everything in the system, not recommended.  Usually, used for quick troubleshooting.'}, 
  {RoleID: '2', RoleName: 'Edit', RoleType: 'Basic', RoleOwnerUserID: "system", RoleDesc: 'Can edit most transaction, not recommended.  Usually, used for testing environment.'}, 
  {RoleID: '3', RoleName: 'View', RoleType: 'Basic', RoleOwnerUserID: "system", RoleDesc: 'Usually, provided for auditor role.'}, 
  {RoleID: '4', RoleName: 'Pilot_Dock_Appotment_Scheduler', RoleType: 'CustomRole', RoleOwnerUserID: "cdion", RoleDesc: 'Orchestrate incoming & outgoing shipments. Schedule dock appointments, keep traffic flowing, maximize efficiency.'}, 
  {RoleID: '5', RoleName: 'New_Purchase_Order', RoleType: 'CustomRole', RoleOwnerUserID: "kmarx", RoleDesc: 'I initiate, review, and approve purchase requests, ensuring timely ordering and budget compliance'},   
  {RoleID: '6', RoleName: 'Warehouse_Operations_Manager', RoleType: 'Predifined', RoleOwnerUserID: "system", RoleDesc: 'Warehouse Operations Maestro. Oversees inventory, staff, and logistics. Ensures smooth flow, top efficiency'},
  {RoleID: '7', RoleName: 'Purchasing_Manager', RoleType: 'Predifined', RoleOwnerUserID: "system", RoleDesc: ' Procurement mastermind. Negotiates contracts, manages vendors, secures best deals. Cost-cutting champion, keeps supply chain flowing.'},
  {RoleID: '8', RoleName: 'Inventory_Planner', RoleType: 'Predifined', RoleOwnerUserID: "system", RoleDesc: 'Forecasts demand, optimizes stock, prevents stockouts. Balances cost & service.'}, 


];

/**
 * Data source for the DataTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ScRolesConfigDataSource extends DataSource<DataTableRolesConfig> {
  data: DataTableRolesConfig[] = EXAMPLE_ROLES_CONFIG_DATA;
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
  connect(): Observable<DataTableRolesConfig[]> {
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
  private getPagedData(data: DataTableRolesConfig[]): DataTableRolesConfig[] {
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
  private getSortedData(data: DataTableRolesConfig[]): DataTableRolesConfig[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'RoleID': return compare(a.RoleID, b.RoleID, isAsc);
        case 'UserName': return compare(a.RoleName, b.RoleName, isAsc);
        case 'UserEmail': return compare(+a.RoleOwnerUserID, +b.RoleOwnerUserID, isAsc);        
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
