import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsVwGeneralComponent } from './bs-vw-general.component';

describe('BsVwGeneralComponent', () => {
  let component: BsVwGeneralComponent;
  let fixture: ComponentFixture<BsVwGeneralComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BsVwGeneralComponent]
    });
    fixture = TestBed.createComponent(BsVwGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
