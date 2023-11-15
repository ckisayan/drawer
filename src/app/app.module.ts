import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table';
import { AppComponent } from './app.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { DataTableComponent } from './data-table/data-table.component';
import {MatSidenavModule} from '@angular/material/sidenav';

import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import { TradingPartnerDetailsComponent } from './trading.partner.details/trading.partner.details.component';
import { Tab1Component } from './tab1/tab1.component';
import { Tab2Component } from './tab2/tab2.component';
import { Tab3Component } from './tab3/tab3.component';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgIf, JsonPipe} from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatTooltipModule} from '@angular/material/tooltip';
import { VendorDetailsComponent } from './vendor-details/vendor-details.component';
import { DistributionSystemMasterComponent } from './distribution-system-master/distribution-system-master.component';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { Routes,RouterModule } from '@angular/router';
import { BsbcComponent } from './bsbc/bsbc.component';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import { VendorAttribComponent } from './vendor-info/vendor-attrib/vendor-attrib.component';
import { VendorActiveOrdersComponent } from './vendor-info/vendor-active-orders/vendor-active-orders.component';
import { VendorOrderHistoryComponent } from './vendor-info/vendor-order-history/vendor-order-history.component';
import { NewPurchaseOrderComponent } from './purchase/new-purchase-order/new-purchase-order.component';
import { ChatAssistComponent } from './chat/chat-assist/chat-assist.component';


const appRoutes: Routes = [
  {    path: '', component: AppComponent },
  {    path: 'bsbc', component: BsbcComponent },
  {    path: 'app-distribution-system-master/:id/:accesstoken', component: DistributionSystemMasterComponent  },
  {    path: 'system-master/:id/:accesstoken', component: DistributionSystemMasterComponent  }
]
@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    TradingPartnerDetailsComponent,
    Tab1Component,
    Tab2Component,
    Tab3Component,
    VendorDetailsComponent,
    DistributionSystemMasterComponent,
    VendorAttribComponent,
    VendorActiveOrdersComponent,
    VendorOrderHistoryComponent,
    NewPurchaseOrderComponent,
    ChatAssistComponent
  ],
  imports: [
    BrowserModule,    
    BrowserAnimationsModule,
    MatCheckboxModule,        
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSidenavModule,
    MatFormFieldModule, MatSelectModule, MatButtonModule,MatIconModule,MatTabsModule,
    FormsModule, MatFormFieldModule, MatInputModule, MatIconModule,MatExpansionModule,MatListModule,
    MatFormFieldModule,
    MatDatepickerModule,    
    ReactiveFormsModule,
    NgIf,
    JsonPipe,
    MatNativeDateModule,MatTooltipModule, CdkAccordionModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
