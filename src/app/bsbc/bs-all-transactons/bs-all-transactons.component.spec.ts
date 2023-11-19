import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsAllTransactonsComponent } from './bs-all-transactons.component';

describe('BsAllTransactonsComponent', () => {
  let component: BsAllTransactonsComponent;
  let fixture: ComponentFixture<BsAllTransactonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BsAllTransactonsComponent]
    });
    fixture = TestBed.createComponent(BsAllTransactonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
