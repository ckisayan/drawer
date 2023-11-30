import { Component, AfterViewInit, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';
import { Search276ResultsGrid } from './search276results-grid';
import { Search276ResultsGridDataSource } from './search-276result-grid-datasource';



@Component({
  selector: 'app-bs-search276results-grid',
  templateUrl: './bs-search276results-grid.component.html',
  styleUrls: ['./bs-search276results-grid.component.css']
})
export class BsSearch276resultsGridComponent implements OnInit, AfterViewInit{
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Search276ResultsGrid>;
  ngOnInit(): void {   
  }
  dataSource = new Search276ResultsGridDataSource();  
  displayedColumns = ['SystemId', 'TraceNumber', 'ProviderClaimNumber', 'PayerClaimNumber', 'ClaimChargeAmt'];  
  
  columnsToDisplay: string[] = this.displayedColumns.slice();
  constructor() {    
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}


