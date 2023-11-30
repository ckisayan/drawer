import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsAuditEventVwComponent } from './bs-audit-event-vw.component';

describe('BsAuditEventVwComponent', () => {
  let component: BsAuditEventVwComponent;
  let fixture: ComponentFixture<BsAuditEventVwComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BsAuditEventVwComponent]
    });
    fixture = TestBed.createComponent(BsAuditEventVwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
