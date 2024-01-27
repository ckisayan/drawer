// // TODO: Replace this with your own data model type

// export interface UsersConfig {
//   UserID: string;
//   UserName: string;
//   UserEmail: string;
// }

export interface UsersConfigModel {
  UserID: string;
  UserName: string;
  UserEmail: string;
}

export interface UsersPermissionModel extends UsersConfigModel {
  isAddedToRole: boolean; 
}