import { FormControl, FormGroup, Validators } from '@angular/forms';

export const TaxTypes = [
  { name: 'Taxable', value: 'TAXABLE' },
  { name: 'Tax Exempt', value: 'TAXEXEMPT' },
];

export const CompanyTypes = [
  { name: 'Sole Proprietorship', value: 'SOLEPROPRIETORSHIP' },
  { name: 'Corporation', value: 'CORPORATION' },
  { name: 'Partnership', value: 'PARTNERSHIP' },
  { name: 'Other', value: 'OTHER' },
];

const createAddressFormGroup = () => new FormGroup({
  addressLine1: new FormControl(),
  addressLine2: new FormControl(),
  city: new FormControl(),
  state: new FormControl(),
  zipCode: new FormControl(),
});

const createCompanyInformationFormGroup = () => new FormGroup({
  companyName: new FormControl(),
  dba: new FormControl(),
  federalTaxId: new FormControl(),
  dunsNumber: new FormControl(),
  yearsInBusiness: new FormControl(),
  taxation: new FormControl(),
  companyType: new FormControl(),
  registeredAddress: createAddressFormGroup(),
  billingAddress: createAddressFormGroup(),
  shippingAddress: createAddressFormGroup(),
});

const createPrincipalOwnerOfficersFormGroup = () => new FormGroup({
  name: new FormControl(),
  title: new FormControl(),
  phone: new FormControl(),
});

const createAccountsPayableFormGroup = () => new FormGroup({
  name: new FormControl(),
  phone: new FormControl(),
  paymentInquiryEmail: new FormControl(),
  invoiceSubmissionEmail: new FormControl(),
});

const createContactInformationFormGroup = () => new FormGroup({
  principalOwnersOfficers: createPrincipalOwnerOfficersFormGroup(),
  accountsPayableContact: createAccountsPayableFormGroup(),
});

const createBankInformationFormGroup = () => new FormGroup({
  bankName: new FormControl(),
  contactPerson: new FormControl(),
  contactPhone: new FormControl(),
  contactEmail: new FormControl(),
});

const createTradeReferenceFormGroup = () => new FormGroup({
  companyName: new FormControl(),
  companyPerson: new FormControl(),
  companyPhone: new FormControl(),
  companyEmail: new FormControl(),
  companyAddress: createAddressFormGroup(),
});

const createBankTradeReferencesFormGroup = () => new FormGroup({
  bankInformation: createBankInformationFormGroup(),
  tradeReference: createTradeReferenceFormGroup(),
});

export const creditApplicationFormGroup = new FormGroup({
  companyInformation: createCompanyInformationFormGroup(),
  contactInformation: createContactInformationFormGroup(),
  bankTradeInformation: createBankTradeReferencesFormGroup(),
  overrideEmail: new FormControl(),
});
