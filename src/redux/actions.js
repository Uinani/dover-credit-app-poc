
export const actions = {
  UpdateCompanyInformation: 'UPDATE_COMPANY_INFORMATION',
  UpdateCompanyRegisteredAddress: 'UPDATE_COMPANY_REGISTERED_ADDRESS',
  UpdateCompanyBillingAddress: 'UPDATE_COMPANY_BILLING_ADDRESS',
  UpdateCompanyShippingAddress: 'UPDATE_COMPANY_SHIPPING_ADDRESS',
}

export const updateCompanyInformation = (name, value) => {
  return {
    type: actions.UpdateCompanyInformation,
    payload: { name,  value },
  };
}

export const updateCompanyRegisteredAddress = (name, value) => {
  return {
    type: actions.UpdateCompanyRegisteredAddress,
    payload: { name,  value },
  };
}

export const updateCompanyBillingAddress = (name, value) => {
  return {
    type: actions.UpdateCompanyBillingAddress,
    payload: { name,  value },
  };
}

export const updateCompanyShippingAddress = (name, value) => {
  return {
    type: actions.UpdateCompanyShippingAddress,
    payload: { name,  value },
  };
}
