import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BankTradeInformationComponent } from './components/bank-trade-information/bank-trade-information.component';
import { CompanyInformationComponent } from './components/company-information/company-information.component';
import { ContactInformationComponent } from './components/contact-information/contact-information.component';
import { CreditApplicationViewComponent } from './views/credit-application-view/credit-application-view.component';

@NgModule({
  declarations: [
    AppComponent,
    BankTradeInformationComponent,
    CompanyInformationComponent,
    ContactInformationComponent,
    CreditApplicationViewComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    MatStepperModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
