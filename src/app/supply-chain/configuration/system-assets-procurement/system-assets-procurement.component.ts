import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DataTableProcurementConfig, EXAMPLE_PRO_CONFIG_DATA } from './sc-procurement-config-datasource';

@Component({
  selector: 'app-system-assets-procurement',
  templateUrl: './system-assets-procurement.component.html',
  styleUrls: ['./system-assets-procurement.component.css']
})
export class SystemAssetsProcurementComponent implements AfterViewInit,OnInit  {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<DataTableProcurementConfig>;

  dataSource = new MatTableDataSource(EXAMPLE_PRO_CONFIG_DATA);

  displayedColumns = ['SystemResourceID', 'SystemResourceName', 'SystemResourceDesc'];


  ngOnInit(): void {
    try{   
          
      console.group("init for procurement config called.")
    }catch(err){
      console.log ("error Loading from db, will display hard coded values");
      console.log(err);
    }
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
}
