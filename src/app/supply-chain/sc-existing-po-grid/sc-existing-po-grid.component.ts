import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ScExistingPoDataSource, DataTableExistingPO } from '..//sc-existing-po-grid/sc-existing-po-datasource';
import { SelectionModel } from '@angular/cdk/collections';
import { PurchaseService } from '../sc-services/purchase.service';
import { EventEmitter, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ScGlobalService } from '../sc-globalservices';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, InitialNavigation } from '@angular/router';
import { catchError } from 'rxjs';
const EXAMPLE_PO_DATA: DataTableExistingPO[] = [
  
  { PONumber: 'PO123', OrderDate: '2023-01-01', OrderAmt: '5000.00', POStatus: 'Open', VendorNumber: '123', VendorName: 'Vendor A' },
  { PONumber: 'PO456', OrderDate: '2023-02-15', OrderAmt: '8000.00', POStatus: 'Closed', VendorNumber: '456', VendorName: 'Vendor B' },
  { PONumber: 'PO789', OrderDate: '2023-03-20', OrderAmt: '12000.00', POStatus: 'Open', VendorNumber: '789', VendorName: 'Vendor C' }

];

@Component({
  selector: 'app-sc-existing-po-grid',
  templateUrl: './sc-existing-po-grid.component.html',
  styleUrls: ['./sc-existing-po-grid.component.css']
})

export class ScExistingPoGridComponent implements AfterViewInit,OnInit  {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<DataTableExistingPO>;
  @Output("nexttab") nextTab: EventEmitter<any> = new EventEmitter();
  
  

  message: string="";
  navigate: string="";
  purchaseOrderNumber: string="";
  vendorNumber: string="";
  //dataSource = new ScExistingPoDataSource();
  dataSource = new MatTableDataSource(EXAMPLE_PO_DATA);

  displayedColumns = [ 'PONumber', 'OrderDate', 'OrderAmt', 'POStatus','VendorNumber', 'VendorName', 'actions'];
  selectedPONumber: DataTableExistingPO | undefined;  
  //isDrawerOpen = false;
  selection = new SelectionModel<ScExistingPoDataSource>(true, []);
  drawerWidth: number = 700;
  columnsToDisplay: string[] = this.displayedColumns.slice(); 

  constructor(private purchaseService: PurchaseService,
    private http: HttpClient,
    private activatedRoute: ActivatedRoute    
    
    ){
    this.purchaseService.getmessage.subscribe(msg=> this.message = msg);
    this.purchaseService.getnavigate.subscribe(nav=> this.navigate = nav);
    this.purchaseService.getPurchaseOrderNumber.subscribe(ponumber=> this.purchaseOrderNumber = ponumber);
    this.purchaseService.getVendorNumber.subscribe(vendorNumber=> this.vendorNumber = vendorNumber);
  }
  ngOnInit(): void {
    try{
      // let vn = this.activatedRoute.snapshot.paramMap.get('id')?.toString();
      // if (vn !== undefined)
      //   this.vendorNumber = vn;
      this.getSupplyChainPurchOrders()
    }catch(err){
      console.log ("error Loading from db, will display hard coded values");
      console.log(err);
    }
  }
  
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
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
  getPO(){
    this.getSupplyChainPurchOrders(); 
  }
  getSupplyChainPurchOrders() {
    const endpoint = ScGlobalService.as400endpoint + "allpurchaseorders";    
    console.log("before calling "+endpoint);
    console.log (this.purchaseService);
    let ponumber = "";
    if (this.purchaseOrderNumber.length>0)
    {
      ponumber = this.purchaseOrderNumber;
      console.log(ponumber);
    }
    let vendornumber = "";
    if (this.vendorNumber.length>0)
    {
      vendornumber = this.vendorNumber;
      console.log(ponumber);
    }
    const posearch = {
      ponumber: ponumber,      
      vendornumber: vendornumber
    };
    
    this.http.post<any>(endpoint, posearch).subscribe(data => {
      let httpdata = data.map((purchorders: any) => this.convertToPascalCase(purchorders));
      if (httpdata.length > 0) {    
        
        let itemsindatasource= this.dataSource.data.length + 1;
        console.log("items in data source: " + itemsindatasource);
        for (let i = 0; i <= itemsindatasource; i++) {
          this.dataSource.data.splice(0, 1);
        }
        for (let i = 0; i < httpdata.length; i++) {
          this.dataSource.data = this.dataSource.data.concat(httpdata[i])
        }
      }
    },
    error => {
      console.error('Error fetching Purchase Orders:', error);
    });

    // this.http.get<any[]>(endpoint)
    //   .subscribe(
    //     data => {
    //       let httpdata = data.map(purchorders => this.convertToPascalCase(purchorders));
    //       console.log("Number of purchorders rcvd: "+httpdata.length);
    //       if (httpdata.length > 0) {            
    //         for (let i = 0; i <= this.dataSource.data.length+1; i++) {
    //           this.dataSource.data.splice(0, 1);
    //         }
    //         console.log("POs Loaded");
    //       }

    //       for (let i = 0; i < httpdata.length; i++) {
    //         this.dataSource.data = this.dataSource.data.concat(httpdata[i])
    //       }
    //     },
    //     error => {
    //       console.error('Error fetching Purchase Orders:', error);
    //     }
    //   );
  }
  convertToPascalCase(item: any): any {
    const PascalCaseItem: any = {};

    const keyMappings: { [key: string]: string } = {
      'PONUMBER': 'PONumber',
      'ORDERSTATUS': 'POStatus',
      'VENDORNUMBER': 'VendorNumber',
      'VENDORNAME': 'VendorName',
      'PODATE': 'PoDate',
      'USERIDORDERED': 'UserIdOrdered',
      'PODATEPDT': 'OrderDate',
      'ORDERAMT': 'OrderAmt',

      // Add more mappings as needed
    };
    for (const key in item) {
      if (item.hasOwnProperty(key)) {
        const camelCaseKey = keyMappings[key];
        PascalCaseItem[camelCaseKey] = item[key];
      }
    }
    return PascalCaseItem;
  }
  
}
