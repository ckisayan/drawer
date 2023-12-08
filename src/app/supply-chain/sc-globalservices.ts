import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScGlobalService {
    static as400endpoint = "http://pub400.com:9123/api/supplychain/" ;

  // You can add other properties or methods as needed

  constructor() {}
}