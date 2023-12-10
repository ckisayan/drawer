import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsbcTpGenInfoComponent } from './bsbc-tp-gen-info.component';

describe('BsbcTpGenInfoComponent', () => {
  let component: BsbcTpGenInfoComponent;
  let fixture: ComponentFixture<BsbcTpGenInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BsbcTpGenInfoComponent]
    });
    fixture = TestBed.createComponent(BsbcTpGenInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
