import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DataSourceGen, DataTableItemGen } from '..//bs-generic-res-grid/bs-datasource-gen';
import { SelectionModel } from '@angular/cdk/collections';
import { BsFilterOptionsComponent } from '../bs-filter-options/bs-filter-options.component';
import { MatDialog } from '@angular/material/dialog';
import { BsAddCustomColumnComponent } from '../bs-add-custom-column/bs-add-custom-column.component';

@Component({
  selector: 'app-bs-generic-res-grid',
  templateUrl: './bs-generic-res-grid.component.html',
  styleUrls: ['./bs-generic-res-grid.component.css']
})
export class BsGenericResGridComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<DataTableItemGen>;
  dataSource = new DataSourceGen();

  displayedColumns = [ 'Name', 'SystemID', 'Msg', 'ValidationStatus','TransactionType', 'actions'];
  selectedTradingPartner: DataTableItemGen | undefined;
  selection = new SelectionModel<DataSourceGen>(true, []);
  isDrawerOpen = false;
  drawerWidth: number = 700;
  columnsToDisplay: string[] = this.displayedColumns.slice();
  edidoctype="270";
  constructor( public dialog: MatDialog) {
    
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    //this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  showcolumns(): void {
    this.openDialog('0ms', '0ms')
  }
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(BsAddCustomColumnComponent, {
      width: '450px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
