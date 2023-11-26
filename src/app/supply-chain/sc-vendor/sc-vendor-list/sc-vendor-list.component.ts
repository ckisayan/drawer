import { Component, AfterViewInit, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { VendorData } from './vendordata';
import { ScVendorDataSource } from './sc-vendor-datasource';
import { ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';
//import { SelectionModel } from '@angular/cdk/collections';
//import { EventEmitter, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ScGlobalService } from '../../sc-globalservices';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

const VENTOR_EXAMPLE_DATA: VendorData[] = [
  { VendorNumber: "V123", VendorName: "ABC Supplies 1", VendorAddress: "123 Main Street", VendorCity: "Glendale", VendorState: "CA", VendorZip: "91202", VendorContact: "John Doe", VendorTelNumber: "818-555-1234" },
  { VendorNumber: "V124", VendorName: "ABC Supplies 2", VendorAddress: "456 Main Street", VendorCity: "New York", VendorState: "NY", VendorZip: "10001", VendorContact: "John Doe", VendorTelNumber: "702-555-1234" },
  { VendorNumber: "V123", VendorName: "ABC Supplies 1", VendorAddress: "123 Main Street", VendorCity: "Glendale", VendorState: "CA", VendorZip: "91202", VendorContact: "John Doe", VendorTelNumber: "818-555-1234" },
 
];

@Component({
  selector: 'app-sc-vendor-list',
  templateUrl: './sc-vendor-list.component.html',
  styleUrls: ['./sc-vendor-list.component.css']

})
export class ScVendorListComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<VendorData>;
  //dataSource = new ScVendorDataSource();
  dataSource = new MatTableDataSource(VENTOR_EXAMPLE_DATA);

  displayedColumns = ['VendorName', 'VendorNumber', 'VendorAddress', 'VendorContact', 'VendorTelNumber', 'actions'];
  selection = new SelectionModel<ScVendorDataSource>(true, []);
  drawerWidth: number = 700;
  columnsToDisplay: string[] = this.displayedColumns.slice();

  //selectedVendor: VendorData | undefined;  
  constructor(
    public dialogRef: MatDialogRef<ScVendorListComponent>,
    //private globalService: ScGlobalService,
    private http: HttpClient,
    @Inject(MAT_DIALOG_DATA) public selectedVendor: VendorData,
  ) {
    //this.globalContent = ScGlobalService.globalContent;
  }
  ngOnInit(): void {
    this.loadVendors();
  }
  loadVendors() {
    if (this.dataSource.data.length < 5) {
      console.log("Loading Vendors");
      this.getSupplyChainVendors();
      
    } else {
      console.log("Skip Loading, it is already laoded");
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

  onNoClick(): void {
    this.dialogRef.close();
  }
  getSupplyChainVendors() {
    const endpoint = ScGlobalService.as400endpoint + "allvendors";
    //'http://pub400.com:9123/api/supplychain/allitems';
    console.log("before calling "+endpoint);

    //console.log(this.http.get<any[]>(endpoint));
    // this.http.get<any[]>(endpoint).subscribe(
    //         data => {
    //     let httpdata = data;
    //     console.log(httpdata);
    //   }, error =>{
    //     console.error('Error fetching supply chain vendors:', error);
    //   }      
    // );    

    this.http.get<any[]>(endpoint)
      .subscribe(
        data => {
          let httpdata = data.map(vendor => this.convertToPascalCase(vendor));
          console.log("Number of vendors rcvd: "+httpdata.length);
          if (httpdata.length > 0) {            
            for (let i = 0; i <= this.dataSource.data.length; i++) {
              this.dataSource.data.splice(0, 1);
            }
            console.log("Vendors Loaded");
          }

          for (let i = 0; i < httpdata.length; i++) {
            this.dataSource.data = this.dataSource.data.concat(httpdata[i])
          }
        },
        error => {
          console.error('Error fetching supply chain items:', error);
        }
      );
  }
  convertToPascalCase(item: any): any {
    const PascalCaseItem: any = {};

    const keyMappings: { [key: string]: string } = {
      'VENDORNUMBER': 'VendorNumber',
      'VENDORNAME': 'VendorName',
      'VENDORADDRESS': 'VendorAddress',
      'VENDORCITY': 'VendorCity',
      'STATE': 'State',
      'ZIPCODE': 'ZipCode',
      'VENDORCONTACT': 'VendorContact',
      'VENDORTELNUMBER': 'VendorTelNumber',
      
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
