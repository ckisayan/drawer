import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsOneErrorDetailsComponent } from './bs-one-error-details.component';

describe('BsOneErrorDetailsComponent', () => {
  let component: BsOneErrorDetailsComponent;
  let fixture: ComponentFixture<BsOneErrorDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BsOneErrorDetailsComponent]
    });
    fixture = TestBed.createComponent(BsOneErrorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
