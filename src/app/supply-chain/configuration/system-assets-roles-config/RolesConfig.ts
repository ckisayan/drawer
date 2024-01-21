// TODO: Replace this with your own data model type

import { SystemResourcePermissionModel } from "../system-assets-role-to-object-procure/system-resource-model";
import { WarehouseConfig } from "../warehouse-config/WarehouseConfig";

export interface RolesConfig {
    RoleID: string;
    RoleName: string;
    RoleType: string;
    RoleDesc: string;
    RoleOwnerUserID: string;
}
export interface GrantTypes{
    GrantId: string;
    GrantName: string;
}
export interface RoleToPermissionsModel extends RolesConfig{    
    WarehouseList: WarehouseConfig[];
    GrantTypesList: GrantTypes[];
    SystemProcurementResourcePermissionList: SystemResourcePermissionModel[]

}