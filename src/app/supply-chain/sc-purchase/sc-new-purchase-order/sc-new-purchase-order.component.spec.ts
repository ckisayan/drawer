import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScNewPurchaseOrderComponent } from './sc-new-purchase-order.component';

describe('ScNewPurchaseOrderComponent', () => {
  let component: ScNewPurchaseOrderComponent;
  let fixture: ComponentFixture<ScNewPurchaseOrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScNewPurchaseOrderComponent]
    });
    fixture = TestBed.createComponent(ScNewPurchaseOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
