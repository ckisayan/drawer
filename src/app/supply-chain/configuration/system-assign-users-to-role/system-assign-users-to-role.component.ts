import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { EXAMPLE_USERS_CONFIG_DATA } from '../system-assets-users-config/example-users-config-data';
import { UsersConfig } from '../system-assets-users-config/UsersConfig';

@Component({
  selector: 'app-system-assign-users-to-role',
  templateUrl: './system-assign-users-to-role.component.html',
  styleUrls: ['./system-assign-users-to-role.component.css']
})
export class SystemAssignUsersToRoleComponent implements AfterViewInit,OnInit  {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<UsersConfig>;

  dataSource = new MatTableDataSource(EXAMPLE_USERS_CONFIG_DATA);

  
  displayedColumns = ['UserID', 'UserName', 'UserEmail', 'Action'];


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
