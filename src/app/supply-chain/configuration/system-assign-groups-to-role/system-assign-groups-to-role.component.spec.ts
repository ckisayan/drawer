import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemAssignGroupsToRoleComponent } from './system-assign-groups-to-role.component';

describe('SystemAssignGroupsToRoleComponent', () => {
  let component: SystemAssignGroupsToRoleComponent;
  let fixture: ComponentFixture<SystemAssignGroupsToRoleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SystemAssignGroupsToRoleComponent]
    });
    fixture = TestBed.createComponent(SystemAssignGroupsToRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
