import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemAssetsProcurementComponent } from './system-assets-procurement.component';

describe('SystemAssetsProcurementComponent', () => {
  let component: SystemAssetsProcurementComponent;
  let fixture: ComponentFixture<SystemAssetsProcurementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SystemAssetsProcurementComponent]
    });
    fixture = TestBed.createComponent(SystemAssetsProcurementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
