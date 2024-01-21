import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemAssetsGroupsConfigComponent } from './system-assets-groups-config.component';

describe('SystemAssetsGroupsConfigComponent', () => {
  let component: SystemAssetsGroupsConfigComponent;
  let fixture: ComponentFixture<SystemAssetsGroupsConfigComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SystemAssetsGroupsConfigComponent]
    });
    fixture = TestBed.createComponent(SystemAssetsGroupsConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
