import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemAssetsRoleToObjectComponent } from './system-assets-role-to-object.component';

describe('SystemAssetsRoleToObjectComponent', () => {
  let component: SystemAssetsRoleToObjectComponent;
  let fixture: ComponentFixture<SystemAssetsRoleToObjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SystemAssetsRoleToObjectComponent]
    });
    fixture = TestBed.createComponent(SystemAssetsRoleToObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
