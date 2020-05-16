import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditApplicationViewComponent } from './credit-application-view.component';

describe('CreditApplicationViewComponent', () => {
  let component: CreditApplicationViewComponent;
  let fixture: ComponentFixture<CreditApplicationViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditApplicationViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditApplicationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
