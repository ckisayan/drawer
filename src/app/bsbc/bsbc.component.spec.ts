import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsbcComponent } from './bsbc.component';

describe('BsbcComponent', () => {
  let component: BsbcComponent;
  let fixture: ComponentFixture<BsbcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BsbcComponent]
    });
    fixture = TestBed.createComponent(BsbcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
