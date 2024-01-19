import { Component } from '@angular/core';
import { RolesConfig } from '../system-assets-roles-config/sc-roles-config-datasource';

@Component({
  selector: 'app-system-assets-role-edit',
  templateUrl: './system-assets-role-edit.component.html',
  styleUrls: ['./system-assets-role-edit.component.css']
})
export class SystemAssetsRoleEditComponent {
  
  rolesConfig: RolesConfig = {
    RoleID: '', 
    RoleName: '', 
    RoleType: '', 
    RoleOwnerUserID: '', 
    RoleDesc: ''
  };
  saveData(){

  }
}
