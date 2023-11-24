import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable ({
    providedIn: 'root'
})

export class PurchaseService{
    private message = new BehaviorSubject('initial message!!!');
    private navigate = new BehaviorSubject('search');
    private purchaseOrderNumber = new BehaviorSubject('none');
    
    getmessage = this.message.asObservable();
    getnavigate = this.message.asObservable();
    getPurchaseOrderNumber = this.purchaseOrderNumber.asObservable();
    constructor(){}
    setMessage(message: string){
        this.message.next(message);
    }
    setNavigate(navigate: string){
        this.navigate.next(navigate);
    }
    setPurchaseOrderNumber(purchaseOrderNumber: string){
        this.purchaseOrderNumber.next(purchaseOrderNumber);
    }
}