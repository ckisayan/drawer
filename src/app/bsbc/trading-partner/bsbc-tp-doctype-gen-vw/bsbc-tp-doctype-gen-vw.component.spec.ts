import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsbcTpDoctypeGenVwComponent } from './bsbc-tp-doctype-gen-vw.component';

describe('BsbcTpDoctypeGenVwComponent', () => {
  let component: BsbcTpDoctypeGenVwComponent;
  let fixture: ComponentFixture<BsbcTpDoctypeGenVwComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BsbcTpDoctypeGenVwComponent]
    });
    fixture = TestBed.createComponent(BsbcTpDoctypeGenVwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
