import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingPartnerDetailsComponent } from './trading.partner.details.component';

describe('TradingPartnerDetailsComponent', () => {
  let component: TradingPartnerDetailsComponent;
  let fixture: ComponentFixture<TradingPartnerDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TradingPartnerDetailsComponent]
    });
    fixture = TestBed.createComponent(TradingPartnerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
