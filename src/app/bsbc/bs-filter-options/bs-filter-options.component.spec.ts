import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsFilterOptionsComponent } from './bs-filter-options.component';

describe('BsFilterOptionsComponent', () => {
  let component: BsFilterOptionsComponent;
  let fixture: ComponentFixture<BsFilterOptionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BsFilterOptionsComponent]
    });
    fixture = TestBed.createComponent(BsFilterOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
