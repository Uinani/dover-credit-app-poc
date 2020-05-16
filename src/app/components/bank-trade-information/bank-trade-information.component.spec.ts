import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankTradeInformationComponent } from './bank-trade-information.component';

describe('BankTradeInformationComponent', () => {
  let component: BankTradeInformationComponent;
  let fixture: ComponentFixture<BankTradeInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankTradeInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankTradeInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
