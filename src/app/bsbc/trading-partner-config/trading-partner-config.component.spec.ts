import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingPartnerConfigComponent } from './trading-partner-config.component';

describe('TradingPartnerConfigComponent', () => {
  let component: TradingPartnerConfigComponent;
  let fixture: ComponentFixture<TradingPartnerConfigComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TradingPartnerConfigComponent]
    });
    fixture = TestBed.createComponent(TradingPartnerConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
