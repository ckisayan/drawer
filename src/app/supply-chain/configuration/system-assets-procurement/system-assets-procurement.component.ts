import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { SystemResourceModel } from '../system-assets-role-to-object-procure/system-resource-model';
import { RolesConfig } from '../system-assets-roles-config/RolesConfig';
import { RoleMaintenanceService } from '../system-assets-role-edit/role-maintenance-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ScGlobalService } from '../../sc-globalservices';

@Component({
  selector: 'app-system-assets-procurement',
  templateUrl: './system-assets-procurement.component.html',
  styleUrls: ['./system-assets-procurement.component.css']
})
export class SystemAssetsProcurementComponent implements AfterViewInit,OnInit  {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<SystemResourceModel>;

  dataSource = new MatTableDataSource<SystemResourceModel>;

  displayedColumns = ['SystemResourceID', 'SystemResourceName', 'SystemResourceDesc', 'Action'];

  constructor(private http: HttpClient){   
    
  }


  ngOnInit(): void {
    try{
      console.group("init for procurement config called.")
      this.getData()
    }catch(err){
      console.log ("error Loading from db, will display hard coded values");
      console.log(err);
    }
  }
  
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  getData(){
    const reqdata = {
      systemResource: "",
      systemResourceCategory: "Procurement"
    }
    console.log(JSON.stringify(reqdata))
    const endpoint = ScGlobalService.EntitlementEndPoint + ScGlobalService.EntitlementConfig + "GetSystemResourceConfig";
    console.log(endpoint);
    let validExec = false;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    this.http.post<any>(endpoint,JSON.stringify(reqdata), {headers}).subscribe({
      next: data => {
        console.log ("respons code is : " +data.responseCode);
        if (data.responseCode == "1" ) {                    
          console.log (data.errorDesc)    
          validExec=false;          
        }else {
          for (const item of data.systemResourceResponse) {            
            this.dataSource.data.push({
              SystemResourceID: item.systemResourceId,
              SystemResourceDesc: item.systemResourceDesc,
              SystemResourceName: item.systemResourceName,
              SystemResourceCategory: item.systemResourceCategory
            });
          }           
          //this.table.dataSource = this.dataSource;
          this.dataSource.data = this.dataSource.data.filter(a => a);

          //this.refresh();
        }
      },error: error=> {
        console.log (error.errorDesc);      
      }
    })
    return validExec;
  }
}
