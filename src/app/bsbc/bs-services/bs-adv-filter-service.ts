import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable ({
    providedIn: 'root'
})

export class BsAdvFilterService{
    private showOrigTransId = new BehaviorSubject(true);
    // private navigate = new BehaviorSubject('search');
    // private purchaseOrderNumber = new BehaviorSubject('none');
    
    getShowOrigTransId = this.showOrigTransId.asObservable();
    // getnavigate = this.message.asObservable();
    // getPurchaseOrderNumber = this.purchaseOrderNumber.asObservable();
    constructor(){}
    setShowOrigTransId(showOrigTransId: boolean){
        this.showOrigTransId.next(showOrigTransId);
    }
    // setNavigate(navigate: string){
    //     this.navigate.next(navigate);
    // }
    // setPurchaseOrderNumber(purchaseOrderNumber: string){
    //     this.purchaseOrderNumber.next(purchaseOrderNumber);
    // }
}