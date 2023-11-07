import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributionSystemMasterComponent } from './distribution-system-master.component';

describe('DistributionSystemMasterComponent', () => {
  let component: DistributionSystemMasterComponent;
  let fixture: ComponentFixture<DistributionSystemMasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DistributionSystemMasterComponent]
    });
    fixture = TestBed.createComponent(DistributionSystemMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
