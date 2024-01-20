import { Component, OnInit } from '@angular/core';
import { RolesConfig } from '../system-assets-roles-config/RolesConfig';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { EXAMPLE_WAREHOUSE_CONFIG_DATA } from '../warehouse-config/warehouse-config-datasource';
import { WarehouseConfig } from '../warehouse-config/WarehouseConfig';
import { RoleMaintenanceService } from './role-maintenance-service';
@Component({
  selector: 'app-system-assets-role-edit',
  templateUrl: './system-assets-role-edit.component.html',
  styleUrls: ['./system-assets-role-edit.component.css']
})
export class SystemAssetsRoleEditComponent implements OnInit  {
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
  
  constructor(private roleMaintenanceService:RoleMaintenanceService, private router: Router){    
    //rolesConfig= this.roleMaintenanceService.getWarehouseConfig;
    this.roleMaintenanceService.getRoleConfig.subscribe(rc=> this.rolesConfig = rc);
  }

  ngOnInit(): void {
    
  }

  saveData(){

  }
}
