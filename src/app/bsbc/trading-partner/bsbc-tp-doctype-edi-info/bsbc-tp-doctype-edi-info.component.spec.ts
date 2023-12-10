import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsbcTpDoctypeEdiInfoComponent } from './bsbc-tp-doctype-edi-info.component';

describe('BsbcTpDoctypeEdiInfoComponent', () => {
  let component: BsbcTpDoctypeEdiInfoComponent;
  let fixture: ComponentFixture<BsbcTpDoctypeEdiInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BsbcTpDoctypeEdiInfoComponent]
    });
    fixture = TestBed.createComponent(BsbcTpDoctypeEdiInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
