import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemAssetsConfigComponent } from './system-assets-config.component';

describe('SystemAssetsConfigComponent', () => {
  let component: SystemAssetsConfigComponent;
  let fixture: ComponentFixture<SystemAssetsConfigComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SystemAssetsConfigComponent]
    });
    fixture = TestBed.createComponent(SystemAssetsConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
