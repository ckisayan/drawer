import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsGenericResGridComponent } from './bs-generic-res-grid.component';

describe('BsGenericResGridComponent', () => {
  let component: BsGenericResGridComponent;
  let fixture: ComponentFixture<BsGenericResGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BsGenericResGridComponent]
    });
    fixture = TestBed.createComponent(BsGenericResGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
