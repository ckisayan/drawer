import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { WarehouseConfig } from './WarehouseConfig';

const initialConfig: WarehouseConfig = {
    WarehouseID: '',
    WarehouseName: '',
    CompanyName: '',
    WarehouseRegion: '',
    WarehouseLocation: '',
    WarehouseAddressLine1: '',
    WarehouseAddressLine2: '',
  };

  @Injectable({
    providedIn: 'root',
  })
export class WarehouseConfigService {    
    private warehouseConfigSubject = new BehaviorSubject<WarehouseConfig>(initialConfig);
    getWarehouseConfig = this.warehouseConfigSubject.asObservable();

    constructor() { }

    setWarehouseConfig(newWarehouse: WarehouseConfig) {
        this.warehouseConfigSubject.next(newWarehouse);
    }
}