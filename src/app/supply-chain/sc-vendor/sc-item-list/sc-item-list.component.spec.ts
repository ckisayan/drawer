import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScItemListComponent } from './sc-item-list.component';

describe('ScItemListComponent', () => {
  let component: ScItemListComponent;
  let fixture: ComponentFixture<ScItemListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScItemListComponent]
    });
    fixture = TestBed.createComponent(ScItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
