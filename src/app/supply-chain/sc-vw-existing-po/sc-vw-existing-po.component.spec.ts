import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScVwExistingPoComponent } from './sc-vw-existing-po.component';

describe('ScVwExistingPoComponent', () => {
  let component: ScVwExistingPoComponent;
  let fixture: ComponentFixture<ScVwExistingPoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScVwExistingPoComponent]
    });
    fixture = TestBed.createComponent(ScVwExistingPoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
