import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { AppComponent } from './app.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { DataTableComponent } from './data-table/data-table.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { TradingPartnerDetailsComponent } from './trading.partner.details/trading.partner.details.component';
import { Tab1Component } from './tab1/tab1.component';
import { Tab2Component } from './tab2/tab2.component';
import { Tab3Component } from './tab3/tab3.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIf, JsonPipe } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { VendorDetailsComponent } from './vendor-details/vendor-details.component';
import { DistributionSystemMasterComponent } from './distribution-system-master/distribution-system-master.component';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { Routes, RouterModule } from '@angular/router';
import { BsbcComponent } from './bsbc/bsbc.component';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { VendorAttribComponent } from './vendor-info/vendor-attrib/vendor-attrib.component';
import { VendorActiveOrdersComponent } from './vendor-info/vendor-active-orders/vendor-active-orders.component';
import { VendorOrderHistoryComponent } from './vendor-info/vendor-order-history/vendor-order-history.component';
import { NewPurchaseOrderComponent } from './purchase/new-purchase-order/new-purchase-order.component';
import { ChatAssistComponent } from './chat/chat-assist/chat-assist.component';
import { MatStepperModule } from '@angular/material/stepper';
import { TradingPartnerConfigComponent } from './bsbc/trading-partner-config/trading-partner-config.component';
import { ScOverviewComponent } from './supply-chain/sc-overview/sc-overview.component';
import { BsOverviewComponent } from './bsbc/bs-overview/bs-overview.component';
import { BsRequest276Component } from './bsbc/bs-request276/bs-request276.component';
import { BsResponse277Component } from './bsbc/bs-response277/bs-response277.component';
import { BsRr276277Component } from './bsbc/bs-rr276277/bs-rr276277.component';
import { BsAllTransactonsComponent } from './bsbc/bs-all-transactons/bs-all-transactons.component';
import { BsAdvanceSearchComponent } from './bsbc/bs-advance-search/bs-advance-search.component';
import { BsFilterOptionsComponent } from './bsbc/bs-filter-options/bs-filter-options.component';
import { MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule } from '@angular/material/tree';
import { BsFilterOptionsFlatComponent } from './bsbc/bs-filter-options-flat/bs-filter-options-flat.component';
import { BsGenericResGridComponent } from './bsbc/bs-generic-res-grid/bs-generic-res-grid.component';
import { ScChatComponent } from './supply-chain/sc-chat/sc-chat.component';
import { BsBreadcrumbComponent } from './bsbc/bs-breadcrumb/bs-breadcrumb.component';
import { ScBreadcrumbComponent } from './supply-chain/sc-breadcrumb/sc-breadcrumb.component';
import { ScVwExistingPoComponent } from './supply-chain/sc-vw-existing-po/sc-vw-existing-po.component';
import { ScExistingPoSearchComponent } from './supply-chain/sc-existing-po-search/sc-existing-po-search.component';
import { ScExistingPoGeneralviewComponent } from './supply-chain/sc-existing-po-generalview/sc-existing-po-generalview.component';
import { ScExistingPoGridComponent } from './supply-chain/sc-existing-po-grid/sc-existing-po-grid.component';
//import { BsVwGeneralComponent } from './bsbc/bs-vw-general/bs-vw-general.component';
import { ScNewPurchaseOrderComponent } from './supply-chain/sc-purchase/sc-new-purchase-order/sc-new-purchase-order.component';
import { ScVendorListComponent } from './supply-chain/sc-vendor/sc-vendor-list/sc-vendor-list.component';
import { MatMenuModule } from '@angular/material/menu';


import {
  MatDialog,

  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
  MatDialogModule
} from '@angular/material/dialog';
import { ScItemListComponent } from './supply-chain/sc-vendor/sc-item-list/sc-item-list.component';
import { BsSearch276resultsGridComponent } from './bsbc/bs-search276results-grid/bs-search276results-grid.component';
import { BsTxnDetailsComponent } from './bsbc/bs-txn-details/bs-txn-details.component';
import { BsGeneralVwComponent } from './bsbc/txn-details/bs-general-vw/bs-general-vw.component';
import { BsEdiVwComponent } from './bsbc/txn-details/bs-edi-vw/bs-edi-vw.component';
import { BsRelatedVwComponent } from './bsbc/txn-details/bs-related-vw/bs-related-vw.component';
import { BsAuditEventVwComponent } from './bsbc/txn-details/bs-audit-event-vw/bs-audit-event-vw.component';
import { BsErrorVwComponent } from './bsbc/txn-details/bs-error-vw/bs-error-vw.component';
import { BsCustomSearchEditComponent } from './bsbc/bs-custom-search-edit/bs-custom-search-edit.component';
import { BsOneErrorDetailsComponent } from './bsbc/txn-details/bs-one-error-details/bs-one-error-details.component';
import { BsAddCustomColumnComponent } from './bsbc/bs-add-custom-column/bs-add-custom-column.component';
import { BsbcTpRelationshipComponent } from './bsbc/trading-partner/bsbc-tp-relationship/bsbc-tp-relationship.component';
import { BsbcTpGenInfoComponent } from './bsbc/trading-partner/bsbc-tp-gen-info/bsbc-tp-gen-info.component';
import { BsbcTpDoctypeDetailsComponent } from './bsbc/trading-partner/bsbc-tp-doctype-details/bsbc-tp-doctype-details.component';
import { BsbcTpDoctypeGenVwComponent } from './bsbc/trading-partner/bsbc-tp-doctype-gen-vw/bsbc-tp-doctype-gen-vw.component';
import { BsbcTpDoctypeEdiInfoComponent } from './bsbc/trading-partner/bsbc-tp-doctype-edi-info/bsbc-tp-doctype-edi-info.component';
import { WarehouseConfigComponent } from './supply-chain/configuration/warehouse-config/warehouse-config.component';
import { SystemAssetsConfigComponent } from './supply-chain/configuration/system-assets-config/system-assets-config.component';
import { SystemAssetsProcurementComponent } from './supply-chain/configuration/system-assets-procurement/system-assets-procurement.component';
import { SystemAssetsUsersConfigComponent } from './supply-chain/configuration/system-assets-users-config/system-assets-users-config.component';
import { SystemAssetsRolesConfigComponent } from './supply-chain/configuration/system-assets-roles-config/system-assets-roles-config.component';
import { SystemAssetsRoleEditComponent } from './supply-chain/configuration/system-assets-role-edit/system-assets-role-edit.component';
import { WarehouseEditComponent } from './supply-chain/configuration/warehouse-edit/warehouse-edit.component';




const appRoutes: Routes = [
  //{ path: '', component: AppComponent, pathMatch: 'full' },
  {
    path: '', component: DistributionSystemMasterComponent,
    children: [
      { path: '', component: ScOverviewComponent },
    ]
  },
  {
    path: 'bsbc', component: BsbcComponent,
    children: [
      { path: '', component: BsOverviewComponent },
      {
        path: 'transmissions', component: BsAllTransactonsComponent,
        children: [
          { path: 'grid', component: BsGenericResGridComponent }
        ]
      },
      { path: "txn-details", component: BsTxnDetailsComponent },
      { path: "errordetails", component: BsOneErrorDetailsComponent },
      { path: "customsearch", component: BsCustomSearchEditComponent },

      {
        path: 'request276', component: BsRequest276Component,
        children: [
          { path: "grid", component: BsSearch276resultsGridComponent }
        ]
      },
      { path: 'response277', component: BsResponse277Component },
      { path: 'req-res-276-7', component: BsRr276277Component },
      { path: 'trading-partner', component: TradingPartnerConfigComponent },
      { path: 'trading-partner-details', component: TradingPartnerDetailsComponent },
      //  { path: 'tp-doctype-details', component:  BsbcTpDoctypeDetailsComponent},
      { path: 'tp-doctype-details', component: BsbcTpDoctypeGenVwComponent },


    ]
  },


  {
    path: 'app-distribution-system-master/:id/:accesstoken', component: DistributionSystemMasterComponent

  },
  {
    path: 'supply-chain', component: DistributionSystemMasterComponent,
    children: [
      { path: '', component: ScOverviewComponent },
      { path: 'overview', component: ScOverviewComponent },
      {

        path: 'purchase-order', component: ScNewPurchaseOrderComponent,
        children: [
          { path: 'grid', component: ScExistingPoGridComponent, },
          { path: 'grid/:vendornumber', component: ScExistingPoGridComponent, }
        ]
      },
      { path: 'configuration/warehouse', component: WarehouseConfigComponent},
      { path: 'configuration/warehouse-edit', component: WarehouseEditComponent},
      { path: 'configuration/system-assets', component: SystemAssetsConfigComponent},
      { path: 'configuration/system-users', component: SystemAssetsUsersConfigComponent},
      { path: 'configuration/system-roles', component: SystemAssetsRolesConfigComponent},
      { path: 'configuration/system-roles-edit', component: SystemAssetsRoleEditComponent},
      { path: 'purchase-order/:id/:accestoken', component: ScNewPurchaseOrderComponent },
      { path: 'purchase-order/:accestoken', component: ScNewPurchaseOrderComponent },
      { path: 'vendor-details', component: VendorDetailsComponent },
      {
        path: 'existing-po', component: ScVwExistingPoComponent,
        children: [
          { path: 'grid', component: ScExistingPoGridComponent, }
        ]
      },
      { path: 'existing-po/:id', component: ScVwExistingPoComponent },
      { path: 'existing-po/:id/:accesstoken', component: ScVwExistingPoComponent },
    ]
  },
  { path: 'system-master/:id/:accesstoken', component: DistributionSystemMasterComponent },
  { path: 'supply-chain/:id/:accesstoken', component: DistributionSystemMasterComponent },

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
    ChatAssistComponent,

    TradingPartnerConfigComponent, BsbcComponent, ScOverviewComponent, BsOverviewComponent, BsRequest276Component, BsResponse277Component, BsRr276277Component, BsAllTransactonsComponent, BsAdvanceSearchComponent, BsFilterOptionsComponent, BsFilterOptionsFlatComponent, BsGenericResGridComponent, ScChatComponent, BsBreadcrumbComponent, ScBreadcrumbComponent, ScVwExistingPoComponent, ScExistingPoSearchComponent, ScExistingPoGeneralviewComponent, ScExistingPoGridComponent, ScNewPurchaseOrderComponent, ScVendorListComponent, ScItemListComponent, BsSearch276resultsGridComponent, BsTxnDetailsComponent, BsGeneralVwComponent, BsEdiVwComponent, BsRelatedVwComponent, BsAuditEventVwComponent, BsErrorVwComponent, BsCustomSearchEditComponent, BsOneErrorDetailsComponent, BsAddCustomColumnComponent, BsbcTpRelationshipComponent, BsbcTpGenInfoComponent, BsbcTpDoctypeDetailsComponent, BsbcTpDoctypeGenVwComponent, BsbcTpDoctypeEdiInfoComponent, WarehouseConfigComponent, SystemAssetsConfigComponent, SystemAssetsProcurementComponent, SystemAssetsUsersConfigComponent, SystemAssetsRolesConfigComponent, SystemAssetsRoleEditComponent, WarehouseEditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSidenavModule,
    MatFormFieldModule, MatSelectModule, MatButtonModule, MatIconModule, MatTabsModule,
    FormsModule, MatFormFieldModule, MatInputModule, MatIconModule, MatExpansionModule, MatListModule,
    MatFormFieldModule, MatStepperModule,
    MatTreeModule, MatButtonModule, MatIconModule, MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule, HttpClientModule,
    NgIf,
    JsonPipe,
    MatDialogModule,
    MatNativeDateModule, MatTooltipModule, CdkAccordionModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
