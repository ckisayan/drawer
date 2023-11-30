import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsTxnDetailsComponent } from './bs-txn-details.component';

describe('BsTxnDetailsComponent', () => {
  let component: BsTxnDetailsComponent;
  let fixture: ComponentFixture<BsTxnDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BsTxnDetailsComponent]
    });
    fixture = TestBed.createComponent(BsTxnDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
