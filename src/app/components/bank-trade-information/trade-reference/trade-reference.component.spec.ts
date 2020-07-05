import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeReferenceComponent } from './trade-reference.component';

describe('TradeReferenceComponent', () => {
  let component: TradeReferenceComponent;
  let fixture: ComponentFixture<TradeReferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeReferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
