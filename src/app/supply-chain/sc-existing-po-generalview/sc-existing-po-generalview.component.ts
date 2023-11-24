import { Component } from '@angular/core';
import { PurchaseService } from '../sc-services/purchase.service';

@Component({
  selector: 'app-sc-existing-po-generalview',
  templateUrl: './sc-existing-po-generalview.component.html',
  styleUrls: ['./sc-existing-po-generalview.component.css']
})
export class ScExistingPoGeneralviewComponent {
  message: string="";
  navigate: string="";
  purchaseOrderNumber: string=""
  constructor(private purchaseService: PurchaseService){
    this.purchaseService.getmessage.subscribe(msg=> this.message = msg);
    this.purchaseService.getnavigate.subscribe(nav=> this.navigate = nav);
    this.purchaseService.getPurchaseOrderNumber.subscribe(ponumber=> this.purchaseOrderNumber = ponumber);
  }
}
