import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { CustomColumnData } from './customcolumndata';
import { CustomColumnDataSource } from './customcolumndatasource';
import { SelectionModel } from '@angular/cdk/collections';

const CustomColumn_EXAMPLE_DATA: CustomColumnData[] = [
  {ColumnName: "Service Begin Date", SectionName: "Subscriber"},
  {ColumnName: "Service End Daet", SectionName: "Subscriber"},
  {ColumnName: "Eligibility Begin Date", SectionName: "Subscriber"},
  {ColumnName: "Eligibility End Daet", SectionName: "Subscriber"},
  {ColumnName: "Trading Partner Id", SectionName: "Trading Partner"},
  {ColumnName: "TRN02", SectionName: "EDI"},
  {ColumnName: "BHT03", SectionName: "EDI"},

];
@Component({
  selector: 'app-bs-add-custom-column',
  templateUrl: './bs-add-custom-column.component.html',
  styleUrls: ['./bs-add-custom-column.component.css']
})
export class BsAddCustomColumnComponent implements OnInit, AfterViewInit {
  
  constructor(public dialogRef: MatDialogRef<BsAddCustomColumnComponent>    
    ) {}

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<CustomColumnData>;
  //dataSource = new ScVendorDataSource();
  
  dataSource = new MatTableDataSource(CustomColumn_EXAMPLE_DATA);
  

  displayedColumns = ['TradingPartnerCheckBox','ColumnName', 'SectionName', 'actions'];
  selection = new SelectionModel<CustomColumnDataSource>(true, []);
  drawerWidth: number = 700;
  columnsToDisplay: string[] = this.displayedColumns.slice();

  ngOnInit(): void {
    //this.loadVendors();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select());
  }

  closedialog(){
    this.onNoClick();
  }
}
