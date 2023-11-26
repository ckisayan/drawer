
import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
import { ScVendorListComponent } from '../../sc-vendor/sc-vendor-list/sc-vendor-list.component';
import { VendorData } from '../../sc-vendor/sc-vendor-list/vendordata';
import { PurchaseOrder } from '../../sc-vendor/sc-vendor-list/purchaseorder';
import { PurchaseItem } from '../../sc-vendor/sc-vendor-list/purchaseitem';
import { MatTable } from '@angular/material/table';
import { ScItemListComponent } from '../../sc-vendor/sc-item-list/sc-item-list.component';

const PurchaseItem_Data: PurchaseItem[] = [
  { ItemNumber: '', ItemShortDesc: '', UnitPriceAmt: '', VendorNumber: '', ItemQuanity: "" },
]
@Component({
  selector: 'app-sc-new-purchase-order',
  templateUrl: './sc-new-purchase-order.component.html',
  styleUrls: ['./sc-new-purchase-order.component.css']
})
export class ScNewPurchaseOrderComponent implements OnInit {

  isLinear = false;
  firstFormGroup: any;
  secondFormGroup: any;
  thirdFormGroup: any;
  hideVendorRow: boolean = true;
  vendorNumber = "";
  vendorname = "";
  POStatus = "Pending";
  vendorSelected: VendorData =
    { VendorNumber: "", VendorName: "", VendorAddress: "", VendorCity: "", VendorState: "", VendorZip: "", VendorContact: "", VendorTelNumber: "" };
  purchaseOrder: PurchaseOrder = { PONumber: "", PODate: new Date().toLocaleDateString(), OrderStatus: "New", UserIdOrdered: "", VendorNumber: "" };
  itemDisplayedColumns: string[] = ['ItemNumber', 'ItemShortDesc', 'UnitPriceAmt', 'ItemQuanity'];
  dataItemSource = [...PurchaseItem_Data];
  @ViewChild(MatTable) table!: MatTable<PurchaseItem>;

  itemSelected =
    { PONumber: "", PODate: new Date().toLocaleDateString(), OrderStatus: "New", UserIdOrdered: "", VendorNumber: "" };

  constructor(private _formBuilder: FormBuilder, public dialog: MatDialog) {
    this.dataItemSource = this.dataItemSource.filter(item => item.ItemNumber !== '');
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
      secondCtrl1: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
  }
  showvendordetails() {
    this.hideVendorRow = !this.hideVendorRow
  }
  getVendorShowMoreText() {
    return this.hideVendorRow ? 'Show more' : 'Show less';
  }
  addItem() {
    //   const randomElementIndex = Math.floor(Math.random() * PurchaseItem_Data.length);
    //   this.dataItemSource.push(PurchaseItem_Data[randomElementIndex]);
    //   this.table.renderRows();
    const dialogRef = this.dialog.open(ScItemListComponent, {
      data: { name: this.vendorNumber, animal: this.vendorname },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result?.ItemNumber.length > 0) {
        this.itemSelected = result;
        this.dataItemSource.push(result);
        this.table.renderRows();
      }

    });
  }

  removeItem() {
    this.dataItemSource.pop();
    this.table.renderRows();
  }
  showvendors(): void {
    const dialogRef = this.dialog.open(ScVendorListComponent, {
      data: { name: this.vendorNumber, animal: this.vendorname },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result?.VendorName.length > 0) {
        this.vendorSelected = result;
        console.log(this.vendorSelected.VendorName);
      }
    });
  }

  saveDraft() { }
  saveTransmit() { }
}
