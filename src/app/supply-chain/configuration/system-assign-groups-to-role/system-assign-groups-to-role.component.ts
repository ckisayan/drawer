import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { GroupsPermissionModel } from '../system-assets-groups-config/GroupsConfig';
//import { EXAMPLE_GROUP_CONFIG_DATA } from '../system-assets-groups-config/sc-groups-config-sample';
import { RolesConfig } from '../system-assets-roles-config/RolesConfig';
import { RoleMaintenanceService } from '../system-assets-role-edit/role-maintenance-service';
import { ApiService } from '../../api-service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ScGlobalService } from '../../sc-globalservices';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-system-assign-groups-to-role',
  templateUrl: './system-assign-groups-to-role.component.html',
  styleUrls: ['./system-assign-groups-to-role.component.css']
})
export class SystemAssignGroupsToRoleComponent implements AfterViewInit,OnInit  {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<GroupsPermissionModel>;
  color: ThemePalette = 'accent';
  dataSource = new MatTableDataSource<GroupsPermissionModel>;

  
  displayedColumns = ['GroupID', 'GroupName', 'GroupDesc','Action'];
  rolesConfig: RolesConfig = {
    RoleID: '',
    RoleName: '',
    RoleType: '',
    RoleOwnerUserID: '',
    RoleDesc: ''
  };
  constructor(private roleMaintenanceService:RoleMaintenanceService,
    private apiService: ApiService,
    private _snackBar: MatSnackBar,
    private http: HttpClient
    ){
    this.roleMaintenanceService.getRoleConfig.subscribe(rc => this.rolesConfig = rc);
    
    
  }
  ngOnInit(): void {
    try{             
      console.log("init for group config called.");
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
  displayData(row:GroupsPermissionModel){   
    console.log(this.dataSource.data);
    this.dataSource.data.forEach(item => {
      if (item.GroupID === row.GroupID) {
        item.isAddedToRole = row.isAddedToRole;
        return; // Exit the forEach loop (similar to break)
      }
    });   
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {duration:3000});
  }
  saveRolePersmissions(){    
    const transformedData = {
      rolePermissionGroupsRequest: this.dataSource.data
      .filter(item => item.isAddedToRole).map(item => ({
        roleId: this.rolesConfig.RoleID,
        groupId: item.GroupID,  // You can customize this based on your needs
      })),
      source: "SystemAssignGroupsToRoleComponent",
    };
    console.log (transformedData);    
    this.apiService.postDataHttp(transformedData, "PutRolePermissionGroups")
    this.openSnackBar("Saved", "Close");    
  }
  getPermissionData(){
    const reqdata = {
      roleId: this.rolesConfig.RoleID      
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
              RolePermissionGroupId: item.rolePermissionGroupId,
              GroupOwnerUserID:item.groupOwnerUserID,
              isAddedToRole: item.isAddedToRole === 'Y'             
            });
          }           
          
          this.dataSource.data = this.dataSource.data.filter(a => a);

          
        }
      },error: error=> {
        console.log (error.errorDesc);      
      }
    })
    return validExec;
  }
}
