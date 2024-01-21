import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemAssignUsersToRoleComponent } from './system-assign-users-to-role.component';

describe('SystemAssignUsersToRoleComponent', () => {
  let component: SystemAssignUsersToRoleComponent;
  let fixture: ComponentFixture<SystemAssignUsersToRoleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SystemAssignUsersToRoleComponent]
    });
    fixture = TestBed.createComponent(SystemAssignUsersToRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
