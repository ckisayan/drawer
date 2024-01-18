import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemAssetsRoleEditComponent } from './system-assets-role-edit.component';

describe('SystemAssetsRoleEditComponent', () => {
  let component: SystemAssetsRoleEditComponent;
  let fixture: ComponentFixture<SystemAssetsRoleEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SystemAssetsRoleEditComponent]
    });
    fixture = TestBed.createComponent(SystemAssetsRoleEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
