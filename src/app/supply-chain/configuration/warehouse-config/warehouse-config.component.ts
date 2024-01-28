import { AfterViewInit, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { EXAMPLE_WAREHOUSE_CONFIG_DATA } from './warehouse-config-datasource';
import { WarehouseConfigModel } from './WarehouseConfig';
import { WarehouseConfigService } from './warehouse-config-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-warehouse-config',
  templateUrl: './warehouse-config.component.html',
  styleUrls: ['./warehouse-config.component.css']
})
export class WarehouseConfigComponent implements AfterViewInit,OnInit  {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<WarehouseConfigModel>;
  @HostListener('document:keydown.control.a', ['$event'])
  onShortcut3(event: KeyboardEvent) {
    event.preventDefault();
    this.createNewWarehouse();
    console.log('Shortcut ctlr+a triggered!');
  }
  dataSource = new MatTableDataSource(EXAMPLE_WAREHOUSE_CONFIG_DATA);
  
  displayedColumns = ['WarehouseID', 'WarehouseName', 'CompanyName', 'WarehouseRegion','WarehouseLocation','WarehouseAddressLine1','Action'];
  
  constructor(private warehouseConfigService:WarehouseConfigService, private router: Router){

  }
  ngOnInit(): void {
    try{          
      console.group("init for warehouse config called.")
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
  showEdit(row: WarehouseConfigModel) {
    //alert(row.WarehouseID);
    this.warehouseConfigService.setWarehouseConfig(row);
    this.router.navigate(['/supply-chain/configuration/warehouse-edit']);
  }
  createNewWarehouse(){
    this.router.navigate(['/supply-chain/configuration/warehouse-edit']);
  }
}
