import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SystemResourceModel, SystemResourcePermissionModel } from './system-resource-model';
import { EXAMPLE_PRO_CONFIG_DATA } from '../system-assets-procurement/example-pro-config-data';
import { ThemePalette } from '@angular/material/core';
import { RoleMaintenanceService } from '../system-assets-role-edit/role-maintenance-service';
import { RolesConfig } from '../system-assets-roles-config/RolesConfig';
import { ApiService } from '../../api-service';
import { ScGlobalService } from '../../sc-globalservices';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
  //dataSource = new MatTableDataSource(EXAMPLE_CONFIG_DATA);
  dataSource = new MatTableDataSource<SystemResourcePermissionModel>;  

  displayedColumns = ['SystemResourceName', 'View', 'Edit', 'Create'];

    
  rolesConfig: RolesConfig = {
    RoleID: '',
    RoleName: '',
    RoleType: '',
    RoleOwnerUserID: '',
    RoleDesc: ''
  };


  constructor(private roleMaintenanceService:RoleMaintenanceService,
    private apiService: ApiService,private http: HttpClient,
    private changeDetectorRefs: ChangeDetectorRef){
    this.roleMaintenanceService.getRoleConfig.subscribe(rc => this.rolesConfig = rc);
    //this.dataSource.data=this.dataSource.data; //.slice(1); //remove empty row
    
  }

  ngOnInit(): void {
    try{   
          
      console.log("init for procurement config called.")
      // for (const item of EXAMPLE_PRO_CONFIG_DATA) {
      //   this.dataSource.data.push({
      //     ...item, // Spread existing properties
      //     isPermittedView: false, // Set default value for isChecked
      //     isPermittedEdit:false,
      //     isPermittedCreate:false
      //   });
      //}
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
  saveProcRolePersmissions(){    
    const transformedData = {
      rolePermissionSystemResources: this.dataSource.data.map(item => ({
        roleId: this.rolesConfig.RoleID,
        rolePermissionSystemResourceId: null,  // You can customize this based on your needs
        systemResourceId: item.SystemResourceID,
        systemResourceCategory: "Procurement",  // You can customize this based on your needs
        isPermittedView: item.isPermittedView ?  "Y" : "N",
        isPermittedCreate: item.isPermittedCreate ?  "Y" : "N",
        isPermittedEdit: item.isPermittedEdit ?  "Y" : "N",
      })),
      source: "SystemAssetsRoleToObjectProcureComponent",
    };
    console.log (transformedData);    
    this.apiService.postDataHttp(transformedData, "PutRolePermissionSystemResources");
  }
  getPermissionData(){
    const reqdata = {
      roleId: this.rolesConfig.RoleID,
      systemResourceCategory: "Procurement"
    }
    console.log(JSON.stringify(reqdata))
    const endpoint = ScGlobalService.EntitlementEndPoint + ScGlobalService.EntitlementConfig + "GetRolePermissionSystemResources";
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
          for (const item of data.rolePermissionSystemResourcesResponse) {            
            this.dataSource.data.push({
              isPermittedView: item.isPermittedView === 'Y',
              isPermittedCreate: item.isPermittedCreate === 'Y',
              isPermittedEdit: item.isPermittedEdit === 'Y',              
              SystemResourceID: item.systemResourceId,
              SystemResourceName: item.systemResourceName,
              SystemResourceDesc: item.SystemResourceDesc,
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
  refresh(){
    this.changeDetectorRefs.detectChanges();
  }

}
