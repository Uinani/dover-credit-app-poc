import chance from 'chance';

export const creditApplication = {
  companyInformation: {
    companyName: chance.string(),
    dba: chance.string(),
    federalTaxId: chance.string(),
    dunsNumber: chance.string(),
    yearsInBusiness: chance.number(),
    taxation: chance.string(),
    companyType: chance.string(),
    registeredAddress: {
      addressLine1: chance.string(),
      addressLine2: chance.string(),
      city: chance.string(),
      state: chance.string(),
      zipCode: chance.number()
    },
    billingAddress: {
      addressLine1: chance.string(),
      addressLine2: chance.string(),
      city: chance.string(),
      state: chance.string(),
      zipCode: chance.number()
    },
    shippingAddress: {
      addressLine1: chance.string(),
      addressLine2: chance.string(),
      city: chance.string(),
      state: chance.string(),
      zipCode: chance.number()
    }
  },
  contactInformation: {
    principalOwnersOfficers: {
      name: chance.string(),
      title: chance.string(),
      phone: chance.string()
    },
    accountsPayableContact: {
      name: chance.string(),
      phone: chance.string(),
      paymentInquiryEmail: chance.string(),
      invoiceSubmissionEmail: chance.string(),
    }
  },
  bankTradeInformation: {
    bankInformation: {
      bankName: chance.string(),
      contactPerson: chance.string(),
      contactPhone: chance.string(),
      contactEmail: chance.string(),
    },
    tradeReference: {
      companyName: chance.string(),
      companyPerson: chance.string(),
      companyPhone: chance.string(),
      companyEmail: chance.string(),
      companyAddress: {
        addressLine1: chance.string(),
        addressLine2: chance.string(),
        city: chance.string(),
        state: chance.string(),
        zipCode: chance.number(),
      }
    }
  },
  overrideEmail: chance.string(),
}
