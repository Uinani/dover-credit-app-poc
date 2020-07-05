import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsPayableContactComponent } from './accounts-payable-contact.component';

describe('AccountsPayableContactComponent', () => {
  let component: AccountsPayableContactComponent;
  let fixture: ComponentFixture<AccountsPayableContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountsPayableContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsPayableContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
