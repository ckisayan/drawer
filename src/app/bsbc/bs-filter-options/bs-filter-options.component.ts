import { Component, OnInit } from '@angular/core';
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
  selector: 'app-bs-filter-options',
  templateUrl: './bs-filter-options.component.html',
  styleUrls: ['./bs-filter-options.component.css']
})
export class BsFilterOptionsComponent implements OnInit {
  private _transformer = (node: X12Node, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

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
  }
  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

}
