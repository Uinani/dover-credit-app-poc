import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import React from 'react';
import Row from 'react-bootstrap/Row';

import Address from '../components/address.component';

export default class CompanyInformationComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onTextChange = (event) => {
    const name = event.target.id;
    const value = event.target.value;

    this.props.onCompanyInformationChange(name, value);
  };

  handleRegisteredAddressChange = (name, value) => {
    this.setState((prevState, props) => {
      const creditApplication = prevState.creditApplication;
      _.set(creditApplication.companyInformation.registeredAddress, name, value);
      return creditApplication;
    });
  }

  handleBillingAddressChange = (name, value) => {
    this.setState((prevState, props) => {
      const creditApplication = prevState.creditApplication;
      _.set(creditApplication.companyInformation.billingAddress, name, value);
      return creditApplication;
    });
  }

  handleShippingAddressChange = (name, value) => {
    this.setState((prevState, props) => {
      const creditApplication = prevState.creditApplication;
      _.set(creditApplication.companyInformation.shippingAddress, name, value);
      return creditApplication;
    });
  }

  render() {
    const companyInformation = this.props.companyInformation;
    return (
      <div>
        <Row>
          <Col>
            <Form.Group controlId="companyName">
              <Form.Label>Name</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Company name" 
                value={companyInformation.companyName}
                onChange={this.onCompanyInfoTextChange}/>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="dba">
              <Form.Label>DBA</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="DBA" 
                value={companyInformation.dba}
                onChange={this.onCompanyInfoTextChange}/>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="federalTaxId">
              <Form.Label>Federal Tax ID</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Federal tax ID" 
                value={companyInformation.companyName}
                onChange={this.onCompanyInfoTextChange}/>
            </Form.Group>
          </Col>
        </Row>
        <h6>Registered Address</h6>
        <Address 
          address={companyInformation.registeredAddress}
          onAddressChange={this.handleRegisteredAddressChange}/>
        <h6>Billing Address</h6>
        <Address 
          address={companyInformation.billingAddress}
          onAddressChange={this.handleBillingAddressChange}/>
        <h6>Shipping Address</h6>
        <Address 
          address={companyInformation.shippingAddress}
          onAddressChange={this.handleShippingAddressChange}/>
      </div>
    );
  }
}