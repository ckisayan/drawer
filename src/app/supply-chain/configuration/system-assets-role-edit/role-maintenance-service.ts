import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { GrantTypes, RoleToPermissionsModel, RolesConfig } from '../system-assets-roles-config/RolesConfig';
import { WarehouseConfig } from "../warehouse-config/WarehouseConfig";
import { SystemResourcePermissionModel } from "../system-assets-role-to-object-procure/system-resource-model";

const grantTypeList: GrantTypes[] = [
  {GrantId: '',  GrantName: ''}
]
const warehouseList: WarehouseConfig[] = [  
    {WarehouseID: "", WarehouseName: "", CompanyName: "", WarehouseRegion: "", WarehouseLocation: "", WarehouseAddressLine1: "", WarehouseAddressLine2: ""},  
]
// const systemProcurementResourcePermissionList: SystemResourcePermissionModel[] = [
//   {SystemResourceID: '', SystemResourceName:'', SystemResourceDesc:'', SystemResourceCategory:'', isPermittedView: false, isPermittedEdit: false,isPermittedCreate: false}
// ]

const initialConfig: RoleToPermissionsModel = {
  RoleID: '',
  RoleName: '',
  RoleType: '',
  RoleDesc: '',
  RoleOwnerUserID: '',
  // GrantTypesList: grantTypeList,
  // WarehouseList: warehouseList,
  //SystemProcurementResourcePermissionList: systemProcurementResourcePermissionList

};

  @Injectable({
    providedIn: 'root',
  })
export class RoleMaintenanceService {    
    private roleConfigSubject = new BehaviorSubject<RolesConfig>(initialConfig);
    getRoleConfig = this.roleConfigSubject.asObservable();

    constructor() { }

    setRoleConfig(newRole: RolesConfig) {
        this.roleConfigSubject.next(newRole);
    }
}