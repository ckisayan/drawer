import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemAssetsUsersConfigComponent } from './system-assets-users-config.component';

describe('SystemAssetsUsersConfigComponent', () => {
  let component: SystemAssetsUsersConfigComponent;
  let fixture: ComponentFixture<SystemAssetsUsersConfigComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SystemAssetsUsersConfigComponent]
    });
    fixture = TestBed.createComponent(SystemAssetsUsersConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
