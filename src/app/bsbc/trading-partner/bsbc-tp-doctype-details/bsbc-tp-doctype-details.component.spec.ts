import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsbcTpDoctypeDetailsComponent } from './bsbc-tp-doctype-details.component';

describe('BsbcTpDoctypeDetailsComponent', () => {
  let component: BsbcTpDoctypeDetailsComponent;
  let fixture: ComponentFixture<BsbcTpDoctypeDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BsbcTpDoctypeDetailsComponent]
    });
    fixture = TestBed.createComponent(BsbcTpDoctypeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
