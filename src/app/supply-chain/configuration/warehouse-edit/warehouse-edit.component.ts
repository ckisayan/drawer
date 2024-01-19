import { Component, HostListener } from '@angular/core';
import { WarehouseConfigService } from '../warehouse-config/warehouse-config-service';
import { WarehouseConfig } from '../warehouse-config/WarehouseConfig';
import { Router } from '@angular/router';

@Component({
  selector: 'app-warehouse-edit',
  templateUrl: './warehouse-edit.component.html',
  styleUrls: ['./warehouse-edit.component.css']
})
export class WarehouseEditComponent {
  warehouse:WarehouseConfig = {
    WarehouseID: '',
    WarehouseName: '',
    CompanyName: '',
    WarehouseRegion: '',
    WarehouseLocation: '',
    WarehouseAddressLine1: '',
    WarehouseAddressLine2: '',
  }; 
  @HostListener('document:keydown.control.s', ['$event'])
  onShortcut3(event: KeyboardEvent) {
    event.preventDefault();
    this.saveData();
    console.log('Shortcut ctlr+s triggered!');
  }
  constructor(private warehouseConfigService:WarehouseConfigService, 
    private router: Router){
    
    this.warehouseConfigService.getWarehouseConfig.subscribe(wh=> this.warehouse = wh);
    console.log("wharehouse name is: " + this.warehouse.WarehouseName)
  }
  navigateBackToWarehouseList(){
    this.router.navigate(['/supply-chain/configuration/warehouse']);
  }
  saveData(){
    this.navigateBackToWarehouseList();
  }
}
