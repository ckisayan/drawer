import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router'


@Component({
  selector: 'app-vendor-details',
  templateUrl: './vendor-details.component.html',
  styleUrls: ['./vendor-details.component.css']
})
export class VendorDetailsComponent implements OnInit {

  vendor!: { id: string; accesstoken: string; };
  vendorid!: string; 
  constructor (private route: ActivatedRoute){
    this.vendorid = 'chris';
  }
  ngOnInit(){
    this.vendor = {
      id: this.route.snapshot.params['id'],
      accesstoken: this.route.snapshot.params['accesstoken'],
    }
    this.route.params
       .subscribe(
        (params: Params) => {
          this.vendor.id = params['id'];
          this.vendor.accesstoken = params['accesstoken'];
        }
       );
  }
  onclick(){
    alert (this.vendorid);
  }
  onVendoridChange(e: Event){
    
    this.vendor.id= (<HTMLInputElement>e.target).value;
  }
  onAccessTokenChange(e: Event){    
    this.vendor.accesstoken= (<HTMLInputElement>e.target).value;
  }
}
