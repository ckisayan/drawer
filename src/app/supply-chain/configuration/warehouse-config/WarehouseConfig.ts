export interface WarehouseConfigModel {
    WarehouseID: string;
    WarehouseName: string;
    CompanyName: string;
    WarehouseRegion: string;
    WarehouseLocation: string;
    WarehouseAddressLine1: string;
    WarehouseAddressLine2: string;

}
export interface WarehousePermissionModel extends WarehouseConfigModel {
    isAddedToRole: boolean;
    RolePermissionWarehouseId: string;
    RoleId: string;
}




