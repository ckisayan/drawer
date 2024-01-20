import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SystemResourceModel, SystemResourcePermissionModel } from './system-resource-model';
import { EXAMPLE_PRO_CONFIG_DATA } from '../system-assets-procurement/example-pro-config-data';
import { ThemePalette } from '@angular/material/core';
import { RoleMaintenanceService } from '../system-assets-role-edit/role-maintenance-service';

const EXAMPLE_CONFIG_DATA: SystemResourcePermissionModel[] = [    
  { SystemResourceID: "", SystemResourceName: '', SystemResourceDesc: '', isPermittedView: false, isPermittedCreate:false,isPermittedEdit:false},
];

@Component({
  selector: 'app-system-assets-role-to-object-procure',
  templateUrl: './system-assets-role-to-object-procure.component.html',
  styleUrls: ['./system-assets-role-to-object-procure.component.css']
})
export class SystemAssetsRoleToObjectProcureComponent implements AfterViewInit,OnInit  {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<SystemResourcePermissionModel>;
  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;
  dataSource = new MatTableDataSource(EXAMPLE_CONFIG_DATA);

  displayedColumns = ['SystemResourceName', 'View', 'Edit', 'Create'];
  constructor(private roleMaintenanceService:RoleMaintenanceService){
    this.dataSource.data=this.dataSource.data.slice(1);
    for (const item of EXAMPLE_PRO_CONFIG_DATA) {
      this.dataSource.data.push({
        ...item, // Spread existing properties
        isPermittedView: false, // Set default value for isChecked
        isPermittedEdit:false,
        isPermittedCreate:false
      });
    }
  }

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
  displayData(row:SystemResourcePermissionModel){   
    this.dataSource.data.forEach(item => {
      if (item.SystemResourceID === row.SystemResourceID) {
        item.isPermittedView = row.isPermittedView;
        item.isPermittedEdit = row.isPermittedEdit;
        item.isPermittedCreate = row.isPermittedCreate;
        return; // Exit the forEach loop (similar to break)
      }
    });   
  }

}
