import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsSearch276resultsGridComponent } from './bs-search276results-grid.component';

describe('BsSearch276resultsGridComponent', () => {
  let component: BsSearch276resultsGridComponent;
  let fixture: ComponentFixture<BsSearch276resultsGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BsSearch276resultsGridComponent]
    });
    fixture = TestBed.createComponent(BsSearch276resultsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
