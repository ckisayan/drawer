import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsAddCustomColumnComponent } from './bs-add-custom-column.component';

describe('BsAddCustomColumnComponent', () => {
  let component: BsAddCustomColumnComponent;
  let fixture: ComponentFixture<BsAddCustomColumnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BsAddCustomColumnComponent]
    });
    fixture = TestBed.createComponent(BsAddCustomColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
