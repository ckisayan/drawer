import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsCustomSearchEditComponent } from './bs-custom-search-edit.component';

describe('BsCustomSearchEditComponent', () => {
  let component: BsCustomSearchEditComponent;
  let fixture: ComponentFixture<BsCustomSearchEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BsCustomSearchEditComponent]
    });
    fixture = TestBed.createComponent(BsCustomSearchEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
