import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { PurchaseService } from '../sc-services/purchase.service';
import { EventEmitter, Output } from '@angular/core';
import { ScExistingPoGridComponent } from '../sc-existing-po-grid/sc-existing-po-grid.component';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-sc-existing-po-search',
  templateUrl: './sc-existing-po-search.component.html',
  styleUrls: ['./sc-existing-po-search.component.css']
})
export class ScExistingPoSearchComponent implements OnInit{  
  @ViewChild(ScExistingPoGridComponent) pogrid!: ScExistingPoGridComponent;
  @Output("nexttab") nextTab: EventEmitter<any> = new EventEmitter();
  @HostListener('document:keydown.alt.s', ['$event'])
  onShortcut2(event: KeyboardEvent) {
    this.SearchPO();
    console.log('Shortcut alt.a triggered!');
  }
  message: string="";
  ponumber: string="";
  vendorNumber?: string="";
  accesstocken?: string="";

  ngOnInit(): void {
    if (this.vendorNumber!= undefined)
      this.purchaseService.setVendorNumber (this.vendorNumber);
  }
  constructor(private purchaseService:PurchaseService, private activatedRoute: ActivatedRoute){
    this.purchaseService.getmessage.subscribe(msg=>this.message = msg)
    this.purchaseService.getPurchaseOrderNumber.subscribe(ponumber=>this.ponumber = ponumber)
    this.purchaseService.getVendorNumber.subscribe(vendorNumber=>this.vendorNumber = vendorNumber)

    this.vendorNumber = this.activatedRoute.snapshot.paramMap.get('id')?.toString();
    
    if (this.vendorNumber === undefined) {           
       this.vendorNumber="";    }
     else{    
       this.vendorNumber=this.vendorNumber.replace("ve", "");
    }
    //this.vendorNumber ="1"
    //this.vendorNumber= this.vendorNumber.replace("ve", "");
    this.accesstocken = this.activatedRoute.snapshot.paramMap.get('accesstoken')?.toString();
    if (this.accesstocken == undefined) this.accesstocken="";
    console.log ("Vendor came in: " + this.vendorNumber);
    console.log ("Access Token came in: " + this.accesstocken);
    
  }

  updateMessage(){
    this.purchaseService.setMessage('this is message comeing from po search comp');
  }

  nexttab(){
    console.log("called Next tab");
    this.nextTab.emit();
  }
  SearchPO(){
    this.purchaseService.setPurchaseOrderNumber (this.ponumber);
    this.pogrid.getPO();
  }


}
