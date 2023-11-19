import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsOverviewComponent } from './bs-overview.component';

describe('BsOverviewComponent', () => {
  let component: BsOverviewComponent;
  let fixture: ComponentFixture<BsOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BsOverviewComponent]
    });
    fixture = TestBed.createComponent(BsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
