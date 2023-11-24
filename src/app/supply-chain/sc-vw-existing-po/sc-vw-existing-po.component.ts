import { Component } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { PurchaseService } from '../sc-services/purchase.service';
//import { EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sc-vw-existing-po',
  templateUrl: './sc-vw-existing-po.component.html',
  styleUrls: ['./sc-vw-existing-po.component.css']
})
export class ScVwExistingPoComponent {
  //@Output("nexttab") parentFun: EventEmitter<any> = new EventEmitter();
  message: string=" test message";
  navigate: string ="search";
  selectedIndex=0;
  
  constructor(private purchaseService: PurchaseService){
    this.purchaseService.getmessage.subscribe(msg=>this.message = msg);
    this.purchaseService.getnavigate.subscribe(nav=>this.navigate = nav);
  }
  
  nexttab(){
    console.log("go to next tab");
    this.selectedIndex+=1;
  }
  tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    this.selectedIndex = tabChangeEvent.index;
  }
}
