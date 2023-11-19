import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsAdvanceSearchComponent } from './bs-advance-search.component';

describe('BsAdvanceSearchComponent', () => {
  let component: BsAdvanceSearchComponent;
  let fixture: ComponentFixture<BsAdvanceSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BsAdvanceSearchComponent]
    });
    fixture = TestBed.createComponent(BsAdvanceSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
