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
import { ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';
import { PurchaseItem } from '../sc-vendor-list/purchaseitem';
import { ScItemDataSource } from './sc-item-datasource';
import { HttpClient } from '@angular/common/http';
import { PurchaseService } from '../../sc-services/purchase.service';
import { ScGlobalService } from '../../sc-globalservices';
//import 'rxjs/add/operator/map';  

@Component({
  selector: 'app-sc-item-list',
  templateUrl: './sc-item-list.component.html',
  styleUrls: ['./sc-item-list.component.css']
})
export class ScItemListComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<PurchaseItem>;
  dataSource = new ScItemDataSource();
  supplyChainItems: any[] = [];
  displayedColumns = ['ItemNumber', 'ItemShortDesc', 'UnitPriceAmt', 'actions'];
  //selection = new SelectionModel<ScItemDataSource>(true, []);
  //drawerWidth: number = 700;
  columnsToDisplay: string[] = this.displayedColumns.slice();
  ngOnInit() {
    this.loadItems();

  }
  //selectedVendor: VendorData | undefined;  
  constructor(
    public dialogRef: MatDialogRef<ScItemDataSource>,
    private http: HttpClient,
    @Inject(MAT_DIALOG_DATA) public selectedVendor: PurchaseItem,
  ) { }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
  //this.dataSource.filter = filterValue.trim().toLowerCase();
  
  
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  loadItems() {
    if (this.dataSource.data.length < 5) {
      console.log("Loading Items");
      this.getSupplyChainItems();
    } else {
      console.log("Skip Loading, it is already laoded");
    }

  }
  getSupplyChainItems() {
    
    const endpoint = ScGlobalService.as400endpoint + "allitems";
    console.log("before calling "+endpoint);
    this.http.get<any[]>(endpoint)
    
      .subscribe(
        data => {
          console.log("subscribed to "+endpoint);
          let httpdata = data.map(item => this.convertToPascalCase(item));

          if (httpdata.length > 0) {
            for (let i = 0; i <= this.dataSource.data.length; i++) {
              this.dataSource.data.splice(0, 1);
            }
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
      'ITEMNUMBER': 'ItemNumber',
      'ITEMSHORTDESC': 'ItemShortDesc',
      'UNITPRICEAMT': 'UnitPriceAmt'
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
