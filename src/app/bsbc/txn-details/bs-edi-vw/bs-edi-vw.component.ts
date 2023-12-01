import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
interface X12Node {
  name: string;
  children?: X12Node[];
}

const TREE_DATA: X12Node[] = [
  {
    name: 'Transmission',
    children: [
      {
        name: 'ISA',
        children: [{
          name: 'GS', children: [{
            name: 'ST',
            children: [
              {name: '2000A', children: [{name: 'HL'}]}, 
              {name: '2100A', children: [{ name: 'NM1'}]}]
          }]
        }],
      },
    ],
  },
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-bs-edi-vw',
  templateUrl: './bs-edi-vw.component.html',
  styleUrls: ['./bs-edi-vw.component.css']
})
export class BsEdiVwComponent implements OnInit, AfterViewInit {
  X12_SAMPLE="ISA*00*          *00*          *ZZ*993            *ZZ*042            *190107*^~";
 
  private _transformer = (node: X12Node, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };  

  ngAfterViewInit() {
    this.treeControl.expandAll();
  }
  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    console.log("advance search activated:constructor");
    this.dataSource.data = TREE_DATA;

  }
  ngOnInit(): void {
    console.log("advance search activated:on init");
    this.X12_SAMPLE+="\r\nGS*HS*RITSA*RSFNA*20190107*1903459*573123721*X*005010X279A1~";
    this.X12_SAMPLE+="\r\nST*270*189408359*005010X279A1~";
    this.X12_SAMPLE+="\r\nBHT*0022*13*INC0359363TESTFILE*20190107*1903456~";
    this.X12_SAMPLE+="\r\nHL*1**20*1~";
    this.X12_SAMPLE+="\r\nNM1*PR*2*ANTHEM BLUE CROSS*****PI*040~";
    this.X12_SAMPLE+="\r\nHL*2*1*21*1~";
    this.X12_SAMPLE+="\r\nNM1*1P*2*DOCTOR AZAD, MEDICAL CORPORATION*****SV*1740410836XXX~";
    this.X12_SAMPLE+="\r\nHL*3*2*22*0~";
    this.X12_SAMPLE+="\r\nTRN*1*BX4D3419010719034583100*993ITSA   ~";
    this.X12_SAMPLE+="\r\nNM1*IL*1******MI*SXD123456789~";
    this.X12_SAMPLE+="\r\nDMG*D8*DATEOFBIRHT~";
    this.X12_SAMPLE+="\r\nDTP*291*D8*20190107~";
    this.X12_SAMPLE+="\r\nEQ*1~";
    this.X12_SAMPLE+="\r\nSE*13*189408359~";
    this.X12_SAMPLE+="\r\nGE*1*573123721~";
    this.X12_SAMPLE+="\r\nIEA*1*573123721~";

  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

}
