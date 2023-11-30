import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsErrorVwComponent } from './bs-error-vw.component';

describe('BsErrorVwComponent', () => {
  let component: BsErrorVwComponent;
  let fixture: ComponentFixture<BsErrorVwComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BsErrorVwComponent]
    });
    fixture = TestBed.createComponent(BsErrorVwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
