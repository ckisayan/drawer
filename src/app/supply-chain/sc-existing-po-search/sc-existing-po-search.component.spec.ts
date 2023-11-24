import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScExistingPoSearchComponent } from './sc-existing-po-search.component';

describe('ScExistingPoSearchComponent', () => {
  let component: ScExistingPoSearchComponent;
  let fixture: ComponentFixture<ScExistingPoSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScExistingPoSearchComponent]
    });
    fixture = TestBed.createComponent(ScExistingPoSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
