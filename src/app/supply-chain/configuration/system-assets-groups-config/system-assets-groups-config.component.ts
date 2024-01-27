import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { GroupsConfigModel } from './GroupsConfig';
import { ThemePalette } from '@angular/material/core';
import { RolesConfig } from '../system-assets-roles-config/RolesConfig';
import { RoleMaintenanceService } from '../system-assets-role-edit/role-maintenance-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ScGlobalService } from '../../sc-globalservices';
//import { EXAMPLE_GROUP_CONFIG_DATA } from './sc-groups-config-sample';

@Component({
  selector: 'app-system-assets-groups-config',
  templateUrl: './system-assets-groups-config.component.html',
  styleUrls: ['./system-assets-groups-config.component.css']
})
export class SystemAssetsGroupsConfigComponent implements AfterViewInit,OnInit  {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<GroupsConfigModel>;
  dataSource = new MatTableDataSource<GroupsConfigModel>;
  color: ThemePalette = 'accent';    
  rolesConfig: RolesConfig = {
    RoleID: '',
    RoleName: '',
    RoleType: '',
    RoleOwnerUserID: '',
    RoleDesc: ''
  };
  constructor(private roleMaintenanceService:RoleMaintenanceService,
    private http: HttpClient
    ){
    this.roleMaintenanceService.getRoleConfig.subscribe(rc => this.rolesConfig = rc);    
  }
  displayedColumns = ['GroupID', 'GroupName', 'GroupDesc', 'Action'];


  ngOnInit(): void {
    try{          
      console.group("init for user config called.")
      this.getPermissionData();
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
  showEdit(row: RolesConfig){
    //alert(row.RoleName);    
    //this.roleMaintenanceService.setRoleConfig(row);
    //this.router.navigate(['/supply-chain/configuration/system-roles-edit']);

  }
  displayData(row:GroupsConfigModel){   
    // this.dataSource.data.forEach(item => {
    //   if (item.SystemResourceID === row.SystemResourceID) {
    //     item.isPermittedView = row.isPermittedView;
    //     item.isPermittedEdit = row.isPermittedEdit;
    //     item.isPermittedCreate = row.isPermittedCreate;
    //     return; // Exit the forEach loop (similar to break)
    //   }
    // });   
  }

  getPermissionData(){
    const reqdata = {
      roleId: ""
    }
    console.log(JSON.stringify(reqdata))
    const endpoint = ScGlobalService.EntitlementEndPoint + ScGlobalService.EntitlementConfig + "GetRolePermissionGroups";
    console.log(endpoint);
    let validExec = false;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    this.http.post<any>(endpoint,JSON.stringify(reqdata), {headers}).subscribe({
      next: data => {
        console.log ("respons code is : " +data.responseCode);
        if (data.responseCode == "1" ) {                    
          console.log (data.errorDesc)    
          validExec=false;          
        }else {
          for (const item of data.rolePermissionGroupsResponse) {            
            this.dataSource.data.push({
              GroupID: item.groupId,
              GroupName: item.groupName,
              GroupDesc: item.groupDesc,
              GroupOwnerUserID: item.groupOwnerUserID
            });
          }           
          //this.table.dataSource = this.dataSource;
          this.dataSource.data = this.dataSource.data.filter(a => a);

          //this.refresh();
        }
      },error: error=> {
        console.log (error.errorDesc);      
      }
    })
    return validExec;
  }
}
