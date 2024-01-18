import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemAssetsRolesConfigComponent } from './system-assets-roles-config.component';

describe('SystemAssetsRolesConfigComponent', () => {
  let component: SystemAssetsRolesConfigComponent;
  let fixture: ComponentFixture<SystemAssetsRolesConfigComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SystemAssetsRolesConfigComponent]
    });
    fixture = TestBed.createComponent(SystemAssetsRolesConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
