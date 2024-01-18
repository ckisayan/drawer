import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DataTableRolesConfig, EXAMPLE_ROLES_CONFIG_DATA } from './sc-roles-config-datasource';

@Component({
  selector: 'app-system-assets-roles-config',
  templateUrl: './system-assets-roles-config.component.html',
  styleUrls: ['./system-assets-roles-config.component.css']
})
export class SystemAssetsRolesConfigComponent implements AfterViewInit,OnInit  {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<DataTableRolesConfig>;

  dataSource = new MatTableDataSource(EXAMPLE_ROLES_CONFIG_DATA);

  
  displayedColumns = ['RoleID', 'RoleName','RoleType', 'RoleOwnerUserID', 'RoleDesc', 'Action'];


  ngOnInit(): void {
    try{   
          
      console.group("init for user config called.")
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