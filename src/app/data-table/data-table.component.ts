import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DataTableDataSource, DataTableItem } from './data-table-datasource';


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<DataTableItem>;
  dataSource = new DataTableDataSource();
  
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['Name', 'SubmitterID', 'State'];
  selectedTradingPartner: DataTableItem | undefined;
  isDrawerOpen=false;
  drawerWidth: number = 700;
  showDrawer(row: DataTableItem){
    this.selectedTradingPartner = row;
    this.isDrawerOpen=true;
  }
  toggleDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen;
  }

  drawerStateChanged(isOpened: boolean) {
    this.isDrawerOpen = isOpened;
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
