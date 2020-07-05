import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';

import { AddressComponent } from './components/address/address.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BankTradeInformationComponent } from './components/bank-trade-information/bank-trade-information.component';
import { CompanyInformationComponent } from './components/company-information/company-information.component';
import { ContactInformationComponent } from './components/contact-information/contact-information.component';
import { CreditApplicationViewComponent } from './views/credit-application-view/credit-application-view.component';
import { PrincipalOwnersComponent } from './components/contact-information/principal-owners/principal-owners.component';
import { AccountsPayableContactComponent } from './components/contact-information/accounts-payable-contact/accounts-payable-contact.component';
import { BankInformationComponent } from './components/bank-trade-information/bank-information/bank-information.component';
import { TradeReferenceComponent } from './components/bank-trade-information/trade-reference/trade-reference.component';

const appearance: MatFormFieldDefaultOptions = {
  appearance: 'outline'
};

@NgModule({
  declarations: [
    AppComponent,
    BankTradeInformationComponent,
    CompanyInformationComponent,
    ContactInformationComponent,
    CreditApplicationViewComponent,
    AddressComponent,
    PrincipalOwnersComponent,
    AccountsPayableContactComponent,
    BankInformationComponent,
    TradeReferenceComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatStepperModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: appearance
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
