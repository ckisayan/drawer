import { Component, OnInit } from '@angular/core';
import { GrantTypesPermissionModel, RolesConfig } from '../system-assets-roles-config/RolesConfig';
//import { CdkAccordionModule } from '@angular/cdk/accordion';
//import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
//import { EXAMPLE_WAREHOUSE_CONFIG_DATA } from '../warehouse-config/warehouse-config-datasource';
import { WarehouseConfig, WarehouseConfigModel, WarehousePermissionModel } from '../warehouse-config/WarehouseConfig';
import { RoleMaintenanceService } from './role-maintenance-service';
import { ScGlobalService } from '../../sc-globalservices';
import {MatSnackBar} from '@angular/material/snack-bar';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError, of } from 'rxjs';

@Component({
  selector: 'app-system-assets-role-edit',
  templateUrl: './system-assets-role-edit.component.html',
  styleUrls: ['./system-assets-role-edit.component.css']
})
export class SystemAssetsRoleEditComponent implements OnInit {
  warehouses: WarehouseConfig = {
    WarehouseID: '',
    WarehouseName: '',
    CompanyName: '',
    WarehouseRegion: '',
    WarehouseLocation: '',
    WarehouseAddressLine1: '',
    WarehouseAddressLine2: '',
  };
  rolesConfig: RolesConfig = {
    RoleID: '',
    RoleName: '',
    RoleType: '',
    RoleOwnerUserID: '',
    RoleDesc: ''
  };
  warehouseData:  WarehousePermissionModel[] = [];  
  warehouseIds:string[] =[];
  grantTypeData:  GrantTypesPermissionModel[] = [];  
  grantTypeIds:string[] =[];
  constructor(private roleMaintenanceService: RoleMaintenanceService, private router: Router,
    private _snackBar: MatSnackBar, private http: HttpClient) {
    //rolesConfig= this.roleMaintenanceService.getWarehouseConfig;
    this.roleMaintenanceService.getRoleConfig.subscribe(rc => this.rolesConfig = rc);
    
    this.getWarehousePermissionData();
    this.getGrantTypePermissionData();
  }

  ngOnInit(): void {

  }

  saveRoleMain() {
    const postData = {
      role: {
        roleID: this.rolesConfig.RoleID,
        roleName: this.rolesConfig.RoleName,
        roleType: this.rolesConfig.RoleType,
        roleOwnerUserID: this.rolesConfig.RoleOwnerUserID,
        roleDesc: this.rolesConfig.RoleDesc
      },
      source: "SystemAssetsRoleEditComponent"
    }
    const endpoint = ScGlobalService.EntitlementEndPoint + ScGlobalService.EntitlementConfig + "putRole";

    if (this.postData(postData, "putRole")) {
      this.openSnackBar("Save Warehosue  Successful.", "Close")
    }else{
      this.openSnackBar("Save Warehouse Failed.", "Close")
    }
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {duration:5000});
  }
  saveWarehouseSection(){
    let validExec = this.saveWarehouse();    
    console.log("valid exec: " + validExec );
    if (validExec){
      validExec = this.saveGrantTypes()
    }    

    if (validExec) 
      this.openSnackBar("Save Successful.", "Close");
    else
      this.openSnackBar("Save Failed.", "Close");
  }
  saveWarehouse(){
    
    console.log("printing warhouse object")    
    const myWarehouseObj= {
      
      rolePermissionWarehouseRequest: this.warehouseIds.map((
        warehouseId: any) => ({
          roleId: this.rolesConfig.RoleID,
          warehouseId: warehouseId,
        })),
        source: "SystemAssetsRoleEditComponent"
    };
    console.log(myWarehouseObj);    
    return this.postData(myWarehouseObj, "PutRolePermissionWarehouse");
  }
  saveGrantTypes(): boolean{
    console.log("printing object")
    let validExec = false;
    const myGrantObj= {
      
      rolePermissionGrantTypeRequest: this.grantTypeIds.map((
        grantTypeId: any) => ({
          roleId: this.rolesConfig.RoleID,
          grantTypeId: grantTypeId,
        })),
        source: "SystemAssetsRoleEditComponent"
    };
    console.log(myGrantObj);
    if (this.postData3(myGrantObj, "PutRolePermissionGrantTypes")) {
      validExec = true;
    }

    return validExec;
  }

  postData(jsonData: any, methodName: string) : boolean{
    const endpoint = ScGlobalService.EntitlementEndPoint + ScGlobalService.EntitlementConfig + methodName;
    let validExec  =true;
    console.log(JSON.stringify(jsonData));
    fetch(endpoint, {
      method: 'POST',
      body: JSON.stringify(jsonData),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      if (response.ok) {
        return response.json();
      } else {        
        throw new Error('Error fetching data');
      }
    }).then((results) => {           
      console.log ("respons code is : " +results.responseCode);  
      if (results.responseCode == "1" ){
        console.log (results.errorDesc);        
        validExec = false;
      }      
    }).catch((error) => {
      validExec = false;
      console.error(error);            
    });   
    return validExec;
  }
  postData2(jsonData: any, methodName: string) : Observable<boolean>{
    const endpoint = ScGlobalService.EntitlementEndPoint + ScGlobalService.EntitlementConfig + methodName;
    let validExec = false;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    this.http.post<any>(endpoint,JSON.stringify(jsonData), {headers}).subscribe({
      next: data => {
        console.log ("respons code is : " +data.responseCode);
        if (data.responseCode == "1" ) {                    
          console.log (data.errorDesc)    
          validExec=false;
          
        }
      },error: error=> {
        console.log (error.errorDesc);  
    
      }
    })
    return of(validExec);
  }
  postData3(jsonData: any, methodName: string) : boolean{
    const endpoint = ScGlobalService.EntitlementEndPoint + ScGlobalService.EntitlementConfig + methodName;
    let validExec = false;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    this.http.post<any>(endpoint,JSON.stringify(jsonData), {headers}).subscribe({
      next: data => {
        console.log ("respons code is : " +data.responseCode);
        if (data.responseCode == "1" ) {                    
          console.log (data.errorDesc)    
          validExec=false;
          
        }
      },error: error=> {
        console.log (error.errorDesc);  
    
      }
    })
    return validExec;
  }
  getWarehousePermissionData(){
    const reqdata = {
      roleId: this.rolesConfig.RoleID      
    }
    console.log(JSON.stringify(reqdata))
    const endpoint = ScGlobalService.EntitlementEndPoint + ScGlobalService.EntitlementConfig + "getRolePermissionWarehouse";
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
          for (const item of data.rolePermissionWarehouseResponse) {            
            this.warehouseData.push({
              WarehouseID: item.warehouseId,
              WarehouseName: item.warehouseName,
              WarehouseLocation: item.warehouseLocation,
              isAddedToRole: item.rolePermissionWarehouseId ? true : false,
              CompanyName: '',
              WarehouseRegion: '',
              WarehouseAddressLine1: '',
              WarehouseAddressLine2: '',
              RolePermissionWarehouseId: '',
              RoleId: item.roleId
            });
            this.warehouseIds = [];
            this.warehouseIds.push(...this.warehouseData
              .filter(warehouse => warehouse.isAddedToRole)
              .map(warehouse => warehouse.WarehouseID))
          }           
        }
      },error: error=> {
        console.log (error.errorDesc);      
      }
    })
    return validExec;
  }
  getGrantTypePermissionData(){
    const reqdata = {
      roleId: this.rolesConfig.RoleID      
    }
    console.log(JSON.stringify(reqdata))
    const endpoint = ScGlobalService.EntitlementEndPoint + ScGlobalService.EntitlementConfig + "getRolePermissionGrantTypes";
    console.log(endpoint);
    let validExec = false;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    this.http.post<any>(endpoint,JSON.stringify(reqdata), {headers}).subscribe({
      next: data1 => {
        console.log ("respons code is : " +data1.responseCode);
        if (data1.responseCode == "1" ) {                    
          console.log (data1.errorDesc)    
          validExec=false;          
        }else {
          for (const item of data1.rolePermissionGrantTypesResponse) {            
            this.grantTypeData.push({
              GrantTypeId: item.grantTypeId,
              GrantTypeName: item.grantTypeName,
              RolePermissionGrantTypeId: item.rolePermissionGrantTypeId,
              isAddedToRole: item.rolePermissionGrantTypeId ? true : false,
              RoleId: item.roleId 
            });
            this.grantTypeIds = [];
            this.grantTypeIds.push(...this.grantTypeData
              .filter(grantTypes => grantTypes.isAddedToRole)
              .map(grantTypes => grantTypes.GrantTypeId))
          }           
        }
      },error: error=> {
        console.log (error.errorDesc);      
      }
    })
    return validExec;
  }
}
