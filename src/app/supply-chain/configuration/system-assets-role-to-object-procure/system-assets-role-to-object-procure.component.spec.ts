import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemAssetsRoleToObjectProcureComponent } from './system-assets-role-to-object-procure.component';

describe('SystemAssetsRoleToObjectProcureComponent', () => {
  let component: SystemAssetsRoleToObjectProcureComponent;
  let fixture: ComponentFixture<SystemAssetsRoleToObjectProcureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SystemAssetsRoleToObjectProcureComponent]
    });
    fixture = TestBed.createComponent(SystemAssetsRoleToObjectProcureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
