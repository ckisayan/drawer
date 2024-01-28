import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { WarehouseConfigModel } from './WarehouseConfig';

const initialConfig: WarehouseConfigModel = {
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
    private warehouseConfigSubject = new BehaviorSubject<WarehouseConfigModel>(initialConfig);
    getWarehouseConfig = this.warehouseConfigSubject.asObservable();

    constructor() { }

    setWarehouseConfig(newWarehouse: WarehouseConfigModel) {
        this.warehouseConfigSubject.next(newWarehouse);
    }
}