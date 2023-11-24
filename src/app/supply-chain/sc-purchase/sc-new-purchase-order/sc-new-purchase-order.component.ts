
import { Component, OnInit, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ScVendorListComponent } from '../../sc-vendor/sc-vendor-list/sc-vendor-list.component';
import { VendorData } from '../../sc-vendor/sc-vendor-list/vendordata';

@Component({
  selector: 'app-sc-new-purchase-order',
  templateUrl: './sc-new-purchase-order.component.html',
  styleUrls: ['./sc-new-purchase-order.component.css']
})
export class ScNewPurchaseOrderComponent implements OnInit{
  isLinear = false;
  firstFormGroup: any;
  secondFormGroup: any;
  thirdFormGroup: any;
  hideVendorRow: boolean = true;
  vendorNumber = "";
  vendorname="";
  vendorSelected: VendorData = 
  {VendorNumber: "V123", VendorName: "ABC Supplies", VendorAddress: "123 Main Street",  VendorCity: "Glendale", VendorState: "CA", VendorZip: "91202",  VendorContact: "John Doe", VentorTelNumber: "818-555-1234"};
  
  constructor(private _formBuilder: FormBuilder, public dialog: MatDialog){
    
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
      secondCtrl1:  ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
  }
  showvendordetails(){
    this.hideVendorRow = !this.hideVendorRow
  }
  getVendorShowMoreText() {
    return this.hideVendorRow ? 'Show more' : 'Show less';
  }

  showvendors(): void {
    const dialogRef = this.dialog.open(ScVendorListComponent, {
      data: {name: this.vendorNumber, animal: this.vendorname},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.vendorSelected.VendorName = result;
    });
  }
}
