import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsGeneralVwComponent } from './bs-general-vw.component';

describe('BsGeneralVwComponent', () => {
  let component: BsGeneralVwComponent;
  let fixture: ComponentFixture<BsGeneralVwComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BsGeneralVwComponent]
    });
    fixture = TestBed.createComponent(BsGeneralVwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
