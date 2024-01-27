export interface SystemResourceModel {    
    SystemResourceID: string;
    SystemResourceName: string;
    SystemResourceDesc: string;
    SystemResourceCategory: string;
  }

  export interface SystemResourcePermissionModel extends SystemResourceModel {
    isPermittedView: boolean;
    isPermittedEdit: boolean;
    isPermittedCreate: boolean;
  }