// TODO: Replace this with your own data model type

//import { SystemResourcePermissionModel } from "../system-assets-role-to-object-procure/system-resource-model";
//import { WarehouseConfigModel } from "../warehouse-config/WarehouseConfig";

export interface RolesConfig {
    RoleID: string;
    RoleName: string;
    RoleType: string;
    RoleDesc: string;
    RoleOwnerUserID: string;
}

export interface RoleToPermissionsModel extends RolesConfig{    
    //WarehouseList: WarehouseConfig[];
    //GrantTypesList: GrantTypes[];
    //SystemProcurementResourcePermissionList: SystemResourcePermissionModel[]

}

export interface GrantTypeConfigModel{
    GrantTypeId: string;
    GrantTypeName: string;
}

export interface GrantTypesPermissionModel extends GrantTypeConfigModel {
    RolePermissionGrantTypeId: string, 
    RoleId: string,
    isAddedToRole: boolean; 
  }
