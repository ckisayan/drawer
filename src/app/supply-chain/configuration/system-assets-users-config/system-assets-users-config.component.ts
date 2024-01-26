import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { EXAMPLE_USERS_CONFIG_DATA } from './example-users-config-data';
import { UsersConfig, UsersPermissionModel } from './UsersConfig';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RoleMaintenanceService } from '../system-assets-role-edit/role-maintenance-service';
import { RolesConfig } from '../system-assets-roles-config/RolesConfig';
import { ScGlobalService } from '../../sc-globalservices';
import { ThemePalette } from '@angular/material/core';


@Component({
  selector: 'app-system-assets-users-config',
  templateUrl: './system-assets-users-config.component.html',
  styleUrls: ['./system-assets-users-config.component.css']
})
export class SystemAssetsUsersConfigComponent implements AfterViewInit,OnInit  {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<UsersPermissionModel>;
  color: ThemePalette = 'accent';
  dataSource = new MatTableDataSource<UsersPermissionModel>;  
  displayedColumns = ['UserID', 'UserName', 'UserEmail', 'Action'];
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
    //this.dataSource.data=this.dataSource.data; //.slice(1); //remove empty row    
    
  }

  ngOnInit(): void {
    try{             
      console.log("init for user config called.")
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
  displayData(row:UsersConfig){   
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
      roleId: this.rolesConfig.RoleID      
    }
    console.log(JSON.stringify(reqdata))
    const endpoint = ScGlobalService.EntitlementEndPoint + ScGlobalService.EntitlementConfig + "GetRolePermissionUsers";
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
          for (const item of data.rolePermissionUsersResponse) {            
            this.dataSource.data.push({
              UserID: item.userId,
              UserName: item.userName,
              UserEmail: item.userEmail,
              isAddedToRole: item.isAddedToRole === 'Y',
             
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
