import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScOverviewComponent } from './sc-overview.component';

describe('ScOverviewComponent', () => {
  let component: ScOverviewComponent;
  let fixture: ComponentFixture<ScOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScOverviewComponent]
    });
    fixture = TestBed.createComponent(ScOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
