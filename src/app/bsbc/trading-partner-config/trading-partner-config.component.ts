import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DataTableDataSource, DataTableItem } from '..//..//data-table/data-table-datasource';
import { SelectionModel } from '@angular/cdk/collections';
import { Router } from '@angular/router';

const EXAMPLE_TP_DATA: DataTableItem[] = [
  {TradingPartnerCheckBox: "123",Name: "Anthem Blue Cross - 88248", SubmitterID: '444', State: "Created",DaysInCommunity: "1001",BusinessRole: "TPA", LastAccessDate: "Nov-15-2023",  Actions:''},
  {TradingPartnerCheckBox: "124",Name: "Pinnacle BSI - 30065", SubmitterID: '00234', State: "Invited", DaysInCommunity: "22",BusinessRole: "Employer", LastAccessDate: "Nov-15-2023",Actions:''}, 
  {TradingPartnerCheckBox: "125",Name: "837 OB SA Delta Health", SubmitterID: '00160', State: "Active", DaysInCommunity: "456",BusinessRole: "Employer", LastAccessDate: "Nov-15-2023",Actions:''}, 
  {TradingPartnerCheckBox: "126",Name: "834 LA county", SubmitterID: '00161', State: "Deactivated",DaysInCommunity: "1469",BusinessRole: "TPA", LastAccessDate: "Jan-15-2023", Actions:''}, 
  {TradingPartnerCheckBox: "127",Name: "837 OB SA Direct_AC", SubmitterID: '00162', State: "Not Responding", DaysInCommunity: "2738",BusinessRole: "Employer", LastAccessDate: "Nov-15-2023",Actions:''}, 
  {TradingPartnerCheckBox: "129",Name: "PassportHTTPS", SubmitterID: '54560', State: "Active", DaysInCommunity: "2865",BusinessRole: "Clearinghouse", LastAccessDate: "Dec-15-2023",Actions:''}, 
  {TradingPartnerCheckBox: "128",Name: "UCLA", SubmitterID: '00163', State: "No Activity", DaysInCommunity: "99",BusinessRole: "Provider", LastAccessDate: "Nov-15-2023",Actions:''},
];

@Component({
  selector: 'app-trading-partner-config',
  templateUrl: './trading-partner-config.component.html',
  styleUrls: ['./trading-partner-config.component.css']
})
export class TradingPartnerConfigComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<DataTableItem>;
  //dataSource = new DataTableDataSource();
  dataSource = new MatTableDataSource(EXAMPLE_TP_DATA);

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [ 'Name', 'State', 'DaysInCommunity','BusinessRole', 'LastAccessDate'];
  
  selectedTradingPartner: DataTableItem | undefined;
  selection = new SelectionModel<DataTableDataSource>(true, []);
  isDrawerOpen = false;
  drawerWidth: number = 700;
  columnsToDisplay: string[] = this.displayedColumns.slice();
  constructor(private router: Router) {}
  showDrawer(row: DataTableItem) {
    //if you want to open a drawer
    //this.selectedTradingPartner = row;
    //this.isDrawerOpen = true;
    console.log("navigating to trading partner details");
    this.router.navigate(['/bsbc/trading-partner-details'])
    

  }
  toggleDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen;
  }

  drawerStateChanged(isOpened: boolean) {
    this.isDrawerOpen = isOpened;
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  addColumn() {
    const randomColumn = Math.floor(Math.random() * this.displayedColumns.length);
    console.log("adding partern: " + randomColumn);
    this.columnsToDisplay.push(this.displayedColumns[randomColumn]);
  }


  removeColumn() {

    if (this.columnsToDisplay.length) {
      console.log("Removing partern");
      this.columnsToDisplay.pop();
    }
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select());
  }

  logSelection() {
    this.selection.selected.forEach(s => console.log(s.data));
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
