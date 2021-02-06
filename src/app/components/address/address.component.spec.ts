import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddressComponent } from './address.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { creditApplicationFormGroup } from 'src/app/common/credit-application.form';
import { FlexLayoutModule } from '@angular/flex-layout';

describe('AddressComponent', () => {
  let component: AddressComponent;
  let fixture: ComponentFixture<AddressComponent>;
  let formGroup: FormGroup;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FlexLayoutModule,
        FormsModule,
        MatInputModule,
        MatSelectModule,
        ReactiveFormsModule,
      ],
      declarations: [AddressComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    formGroup = creditApplicationFormGroup;
    fixture = TestBed.createComponent(AddressComponent);
    component = fixture.componentInstance;
    component.formGroup = formGroup;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
