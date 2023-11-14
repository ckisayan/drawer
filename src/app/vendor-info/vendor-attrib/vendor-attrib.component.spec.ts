import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorAttribComponent } from './vendor-attrib.component';

describe('VendorAttribComponent', () => {
  let component: VendorAttribComponent;
  let fixture: ComponentFixture<VendorAttribComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorAttribComponent]
    });
    fixture = TestBed.createComponent(VendorAttribComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
