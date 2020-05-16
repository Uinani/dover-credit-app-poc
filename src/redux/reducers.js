import { combineReducers } from 'redux'
import { actions } from './actions';
import _ from 'lodash';

function handleCompanyInformation(state = {}, action) {
  const updatedState = _.cloneDeep(state);
  
  switch (action.type) {
    case actions.UpdateCompanyInformation:
      return _.set(updatedState.companyInformation,
        action.payload.name,
        action.payload.value);

    case actions.UpdateCompanyRegisteredAddress:
      return _.set(updatedState.companyInformation.registeredAddress,
        action.payload.name,
        action.payload.value);

    case actions.UpdateCompanyBillingAddress:
      return _.set(updatedState.companyInformation.billingAddress,
        action.payload.name,
        action.payload.value);

    case actions.UpdateCompanyShippingAddress:
      return _.set(updatedState.companyInformation.shippingAddress,
        action.payload.name,
        action.payload.value);

    default:
      return state;
  }
}

const reducers = combineReducers({
  handleCompanyInformation
});

export default reducers;
