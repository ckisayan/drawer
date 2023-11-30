import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsEdiVwComponent } from './bs-edi-vw.component';

describe('BsEdiVwComponent', () => {
  let component: BsEdiVwComponent;
  let fixture: ComponentFixture<BsEdiVwComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BsEdiVwComponent]
    });
    fixture = TestBed.createComponent(BsEdiVwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
