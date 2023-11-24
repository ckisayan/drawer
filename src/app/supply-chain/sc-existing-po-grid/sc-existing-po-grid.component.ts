import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ScExistingPoDataSource, DataTableExistingPO } from '..//sc-existing-po-grid/sc-existing-po-datasource';
import { SelectionModel } from '@angular/cdk/collections';
import { PurchaseService } from '../sc-services/purchase.service';
import { EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sc-existing-po-grid',
  templateUrl: './sc-existing-po-grid.component.html',
  styleUrls: ['./sc-existing-po-grid.component.css']
})
export class ScExistingPoGridComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<DataTableExistingPO>;
  @Output("nexttab") nextTab: EventEmitter<any> = new EventEmitter();
  
  message: string="";
  navigate: string="";
  purchaseOrderNumber: string="";
  dataSource = new ScExistingPoDataSource();
  
  displayedColumns = [ 'PONumber', 'OrderDate', 'OrderAmt', 'POStatus','VendorNumber', 'VendorName', 'actions'];
  selectedPONumber: DataTableExistingPO | undefined;  
  //isDrawerOpen = false;
  selection = new SelectionModel<ScExistingPoDataSource>(true, []);
  drawerWidth: number = 700;
  columnsToDisplay: string[] = this.displayedColumns.slice(); 

  constructor(private purchaseService: PurchaseService){
    this.purchaseService.getmessage.subscribe(msg=> this.message = msg);
    this.purchaseService.getnavigate.subscribe(nav=> this.navigate = nav);
    this.purchaseService.getPurchaseOrderNumber.subscribe(ponumber=> this.purchaseOrderNumber = ponumber);
  }
  
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    //this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  showGeneralTab(row: DataTableExistingPO) {
    //alert("navigate to general tab for P.O. Order #" + row.PONumber)
    this.selectedPONumber = row;
    this.purchaseService.setMessage (row.PONumber)
    this.purchaseService.setPurchaseOrderNumber (row.PONumber)
    this.nexttab();
    //this.isDrawerOpen = true;
  }
  nexttab(){
    this.nextTab.emit();

  }
}
