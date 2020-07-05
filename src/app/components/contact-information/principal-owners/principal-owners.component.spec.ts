import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalOwnersComponent } from './principal-owners.component';

describe('PrincipalOwnersComponent', () => {
  let component: PrincipalOwnersComponent;
  let fixture: ComponentFixture<PrincipalOwnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipalOwnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalOwnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
