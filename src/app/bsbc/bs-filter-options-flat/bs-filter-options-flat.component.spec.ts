import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsFilterOptionsFlatComponent } from './bs-filter-options-flat.component';

describe('BsFilterOptionsFlatComponent', () => {
  let component: BsFilterOptionsFlatComponent;
  let fixture: ComponentFixture<BsFilterOptionsFlatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BsFilterOptionsFlatComponent]
    });
    fixture = TestBed.createComponent(BsFilterOptionsFlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
