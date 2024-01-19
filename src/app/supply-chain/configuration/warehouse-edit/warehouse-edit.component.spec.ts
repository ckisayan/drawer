import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseEditComponent } from './warehouse-edit.component';

describe('WarehouseEditComponent', () => {
  let component: WarehouseEditComponent;
  let fixture: ComponentFixture<WarehouseEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WarehouseEditComponent]
    });
    fixture = TestBed.createComponent(WarehouseEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
