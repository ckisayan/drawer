import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScVendorListComponent } from './sc-vendor-list.component';

describe('ScVendorListComponent', () => {
  let component: ScVendorListComponent;
  let fixture: ComponentFixture<ScVendorListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScVendorListComponent]
    });
    fixture = TestBed.createComponent(ScVendorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
