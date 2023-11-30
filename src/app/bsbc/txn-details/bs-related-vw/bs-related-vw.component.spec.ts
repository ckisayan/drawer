import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsRelatedVwComponent } from './bs-related-vw.component';

describe('BsRelatedVwComponent', () => {
  let component: BsRelatedVwComponent;
  let fixture: ComponentFixture<BsRelatedVwComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BsRelatedVwComponent]
    });
    fixture = TestBed.createComponent(BsRelatedVwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
