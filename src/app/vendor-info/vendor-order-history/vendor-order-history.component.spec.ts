import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorOrderHistoryComponent } from './vendor-order-history.component';

describe('VendorOrderHistoryComponent', () => {
  let component: VendorOrderHistoryComponent;
  let fixture: ComponentFixture<VendorOrderHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorOrderHistoryComponent]
    });
    fixture = TestBed.createComponent(VendorOrderHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
