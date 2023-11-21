import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScBreadcrumbComponent } from './sc-breadcrumb.component';

describe('ScBreadcrumbComponent', () => {
  let component: ScBreadcrumbComponent;
  let fixture: ComponentFixture<ScBreadcrumbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScBreadcrumbComponent]
    });
    fixture = TestBed.createComponent(ScBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
