export interface GroupsConfig {    
    GroupID: string;
    GroupName: string;
    GroupDesc: string;        
    GroupOwnerUserID: string;
    
  }

  export interface GroupsConfigModel {    
    GroupID: string;
    GroupName: string;
    GroupDesc: string;        
    GroupOwnerUserID: string;
  }
  export interface GroupsPermissionModel extends GroupsConfigModel {
    RolePermissionGroupId: string;
    isAddedToRole: boolean; 
  }