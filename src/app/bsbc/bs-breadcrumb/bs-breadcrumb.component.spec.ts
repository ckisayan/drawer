import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsBreadcrumbComponent } from './bs-breadcrumb.component';

describe('BsBreadcrumbComponent', () => {
  let component: BsBreadcrumbComponent;
  let fixture: ComponentFixture<BsBreadcrumbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BsBreadcrumbComponent]
    });
    fixture = TestBed.createComponent(BsBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
