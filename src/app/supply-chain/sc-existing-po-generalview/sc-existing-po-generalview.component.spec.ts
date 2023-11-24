import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScExistingPoGeneralviewComponent } from './sc-existing-po-generalview.component';

describe('ScExistingPoGeneralviewComponent', () => {
  let component: ScExistingPoGeneralviewComponent;
  let fixture: ComponentFixture<ScExistingPoGeneralviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScExistingPoGeneralviewComponent]
    });
    fixture = TestBed.createComponent(ScExistingPoGeneralviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
