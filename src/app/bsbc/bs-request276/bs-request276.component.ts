import { Component } from '@angular/core';

@Component({
  selector: 'app-bs-request276',
  templateUrl: './bs-request276.component.html',
  styleUrls: ['./bs-request276.component.css']
})
export class BsRequest276Component {
  hideDocumentTypeRow: boolean = true;
  showdoctypes(){
    this.hideDocumentTypeRow = !this.hideDocumentTypeRow
  }
  getDocTypeShowMoreText(){
    return this.hideDocumentTypeRow ? 'DocType More' : 'DocType Less';
  }
  
}
