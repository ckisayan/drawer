import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { GroupsConfig } from '../system-assets-groups-config/GroupsConfig';
import { EXAMPLE_GROUP_CONFIG_DATA } from '../system-assets-groups-config/sc-groups-config-sample';

@Component({
  selector: 'app-system-assign-groups-to-role',
  templateUrl: './system-assign-groups-to-role.component.html',
  styleUrls: ['./system-assign-groups-to-role.component.css']
})
export class SystemAssignGroupsToRoleComponent implements AfterViewInit,OnInit  {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<GroupsConfig>;

  dataSource = new MatTableDataSource(EXAMPLE_GROUP_CONFIG_DATA);

  
  displayedColumns = ['GroupID', 'GroupName', 'GroupDesc', 'Action'];


  ngOnInit(): void {
    try{   
          
      console.log("init for group config called.")
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
