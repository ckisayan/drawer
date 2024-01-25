import { Component, OnInit } from '@angular/core';
import { RolesConfig } from '../system-assets-roles-config/RolesConfig';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { EXAMPLE_WAREHOUSE_CONFIG_DATA } from '../warehouse-config/warehouse-config-datasource';
import { WarehouseConfig } from '../warehouse-config/WarehouseConfig';
import { RoleMaintenanceService } from './role-maintenance-service';
import { ScGlobalService } from '../../sc-globalservices';
import {MatSnackBar} from '@angular/material/snack-bar';

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
  warehouseData: WarehouseConfig[] = EXAMPLE_WAREHOUSE_CONFIG_DATA;
  warehouseIds:string[] =[];
  grantTypeIds:string[] =[];
  constructor(private roleMaintenanceService: RoleMaintenanceService, private router: Router,
    private _snackBar: MatSnackBar) {
    //rolesConfig= this.roleMaintenanceService.getWarehouseConfig;
    this.roleMaintenanceService.getRoleConfig.subscribe(rc => this.rolesConfig = rc);
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
    fetch(endpoint, {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        this.openSnackBar("Save Failed.", "Close")
        throw new Error('Error fetching data');
      }
    }).then((results) => {      
      console.log(results);      
      if (results.responseCode == "1" ){
        console.log (results.errorDesc);
        this.openSnackBar("Save Failed.", "Close")
      }
      else
        this.openSnackBar("Save Successfull.", "Close")

    }).catch((error) => {
      console.error(error);
      this.openSnackBar("Save Failed.", "Close")
    });

  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {duration:5000});
  }
  saveWarehouseSection(){
    
    this.saveWarehouse();
    this.saveGrantTypes();
    
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

  }
  saveGrantTypes(){
    console.log("printing object")
    const myGrantObj= {
      
      rolePermissionGrantTypeRequest: this.grantTypeIds.map((
        grantTypeId: any) => ({
          roleId: this.rolesConfig.RoleID,
          grantTypeId: grantTypeId,
        })),
        source: "SystemAssetsRoleEditComponent"
    };
    console.log(myGrantObj);
  }
}
