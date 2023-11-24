import { Component, OnInit } from '@angular/core';
import { PurchaseService } from '../sc-services/purchase.service';
import { EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-sc-existing-po-search',
  templateUrl: './sc-existing-po-search.component.html',
  styleUrls: ['./sc-existing-po-search.component.css']
})
export class ScExistingPoSearchComponent implements OnInit{
  @Output("nexttab") nextTab: EventEmitter<any> = new EventEmitter();
  message: string="";
  ngOnInit(): void {
   
  }
  constructor(private purchaseService:PurchaseService){
    this.purchaseService.getmessage.subscribe(msg=>this.message = msg)
  }

  updateMessage(){
    this.purchaseService.setMessage('this is message comeing from po search comp');
  }

  nexttab(){
    console.log("called Next tab");
    this.nextTab.emit();
  }



}
