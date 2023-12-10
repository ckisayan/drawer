import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsbcTpRelationshipComponent } from './bsbc-tp-relationship.component';

describe('BsbcTpRelationshipComponent', () => {
  let component: BsbcTpRelationshipComponent;
  let fixture: ComponentFixture<BsbcTpRelationshipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BsbcTpRelationshipComponent]
    });
    fixture = TestBed.createComponent(BsbcTpRelationshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
