import {Component, AfterViewInit, Inject} from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { VendorData } from './vendordata';
import { ScVendorDataSource } from './sc-vendor-datasource';
import {  ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';
//import { SelectionModel } from '@angular/cdk/collections';
//import { EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sc-vendor-list',
  templateUrl: './sc-vendor-list.component.html',
  styleUrls: ['./sc-vendor-list.component.css']
  
})
export class ScVendorListComponent implements AfterViewInit  {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<VendorData>;
  dataSource = new ScVendorDataSource();

  displayedColumns = [ 'VendorName', 'VendorNumber', 'actions'];
  selection = new SelectionModel<ScVendorDataSource>(true, []);
  drawerWidth: number = 700;
  columnsToDisplay: string[] = this.displayedColumns.slice();
  constructor(
    public dialogRef: MatDialogRef<ScVendorListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: VendorData,
  ) {}
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    //this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
