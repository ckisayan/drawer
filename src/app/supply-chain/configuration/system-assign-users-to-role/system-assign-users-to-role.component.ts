import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { UsersPermissionModel } from '../system-assets-users-config/UsersConfig';
import { RolesConfig } from '../system-assets-roles-config/RolesConfig';
import { ScGlobalService } from '../../sc-globalservices';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RoleMaintenanceService } from '../system-assets-role-edit/role-maintenance-service';
import { ThemePalette } from '@angular/material/core';
import { ApiService } from '../../api-service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-system-assign-users-to-role',
  templateUrl: './system-assign-users-to-role.component.html',
  styleUrls: ['./system-assign-users-to-role.component.css']
})
export class SystemAssignUsersToRoleComponent implements AfterViewInit,OnInit  {
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
    private apiService: ApiService,
    private _snackBar: MatSnackBar,
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
  displayData(row:UsersPermissionModel){   
    console.log(this.dataSource.data);
    this.dataSource.data.forEach(item => {
      if (item.UserID === row.UserID) {
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
      rolePermissionUsersRequest: this.dataSource.data
      .filter(item => item.isAddedToRole).map(item => ({
        roleId: this.rolesConfig.RoleID,
        userId: item.UserID,  // You can customize this based on your needs
      })),
      source: "SystemAssignUsersToRoleComponent",
    };
    console.log (transformedData);    
    this.apiService.postDataHttp(transformedData, "PutRolePermissionUsers")
    this.openSnackBar("Saved", "Close");    
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
