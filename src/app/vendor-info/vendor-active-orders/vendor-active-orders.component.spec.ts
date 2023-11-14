import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorActiveOrdersComponent } from './vendor-active-orders.component';

describe('VendorActiveOrdersComponent', () => {
  let component: VendorActiveOrdersComponent;
  let fixture: ComponentFixture<VendorActiveOrdersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorActiveOrdersComponent]
    });
    fixture = TestBed.createComponent(VendorActiveOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
