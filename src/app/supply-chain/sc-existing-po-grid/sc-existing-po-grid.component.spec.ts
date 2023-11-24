import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScExistingPoGridComponent } from './sc-existing-po-grid.component';

describe('ScExistingPoGridComponent', () => {
  let component: ScExistingPoGridComponent;
  let fixture: ComponentFixture<ScExistingPoGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScExistingPoGridComponent]
    });
    fixture = TestBed.createComponent(ScExistingPoGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
