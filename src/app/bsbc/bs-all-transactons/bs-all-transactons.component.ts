import { Component, OnInit,AfterViewInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { BsAdvFilterService } from '../bs-services/bs-adv-filter-service';
@Component({
  selector: 'app-bs-all-transactons',
  templateUrl: './bs-all-transactons.component.html',
  styleUrls: ['./bs-all-transactons.component.css']
})
export class BsAllTransactonsComponent  implements OnInit, AfterViewInit{
  isDrawerOpen = false;
  drawerWidth: number = 400;
  hideOrigFilterRow: boolean = false;
  hideDocumentTypeRow: boolean = true;
  constructor(
    private advFilterService: BsAdvFilterService
  ){
    this.advFilterService.getShowOrigTransId.subscribe(origfilt => this.hideOrigFilterRow = origfilt);
    
  } 
  ngOnInit() {   
  }


  toggleDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen;
  }

  drawerStateChanged(isOpened: boolean) {
    this.isDrawerOpen = isOpened;
  }
  showDrawer() {
    //this.selectedTradingPartner = row;
    this.isDrawerOpen = true;
    console.log("called drawer")
  }
  ngAfterViewInit(): void {
    //this.dataSource.sort = this.sort;
    //this.dataSource.paginator = this.paginator;
    //this.table.dataSource = this.dataSource;
  }
  
  showdoctypes(){
    this.hideDocumentTypeRow = !this.hideDocumentTypeRow
  }
  getDocTypeShowMoreText(){
    return this.hideDocumentTypeRow ? 'DocType More' : 'DocType Less';
  }
}
