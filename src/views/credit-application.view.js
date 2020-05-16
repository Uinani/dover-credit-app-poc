import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';
import axios from 'axios';
import _ from 'lodash';

import Header from '../components/header.component';

const url = 'https://dovercreditapppoc.azurewebsites.net/api/OnCreditApplicationPost';

export default class CreditApplication extends React.Component {
  constructor(props) {
    super(props);
    const addressType = {
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      zipCode: '',
    };
    this.state = { 
      creditApplication: {
        companyInformation: {
          companyName: '',
          dba: '',
          registeredAddress: _.cloneDeep(addressType),
          federalTaxId: '',
          dunsNumber: '',
          yearsInBusiness: 0,
          taxable: false,
          taxExempt: false,
          companyType: '',
          soleProprietorship: false,
          corporation: false,
          partnership: false,
          other: false,
          billingAddress:  _.cloneDeep(addressType),
          shippingAddress: _.cloneDeep(addressType),
        },
      },
      formData: {
        alertVariant: '',
        alertText: '',
        showAlert: false,
        showSpinner: false,
      },
    };
  }

  componentDidMount() {

  }

  componentWillUnmount() {
    
  }

  handleCompanyRegisteredAddressChange = (name, value) => {
    this.setState((prevState, props) => {
      const creditApplication = prevState.creditApplication;
      _.set(creditApplication.companyInformation.registeredAddress, name, value);
      return creditApplication;
    });
  }

  handleCompanyBillingAddressChange = (name, value) => {
    this.setState((prevState, props) => {
      const creditApplication = prevState.creditApplication;
      _.set(creditApplication.companyInformation.billingAddress, name, value);
      return creditApplication;
    });
  }

  handleCompanyShippingAddressChange = (name, value) => {
    this.setState((prevState, props) => {
      const creditApplication = prevState.creditApplication;
      _.set(creditApplication.companyInformation.shippingAddress, name, value);
      return creditApplication;
    });
  }

  onAlertClosed = (event) => {
    console.log('Alert closed!');
    this._showAlert(false);
    if (this.state.formData.alertVariant !== 'success') {
      this._clearcreditApplication();
    }
  }

  _showAlert(show) {
    this.setState((prevState, props) => {
      const formData = prevState.formData;
      return _.set(formData, 'showAlert', show);
    });
  }

  onCheckboxChange = (event) => {
    const name = event.target.id;
    const value = event.target.checked;
    this.setState((prevState, props) => {
      const creditApplication = prevState.creditApplication;
      return _.set(creditApplication, name, value);
    });
  }

  onCompanyInfoTextChange = (event) => {
    const name = event.target.id;
    const value = event.target.value;
    this.setState((prevState, props) => {
      const creditApplication = prevState.creditApplication;
      const companyInformation = creditApplication.companyInformation;
      _.set(companyInformation, name, value);
      return creditApplication;
    });
  }
  
  onTextChange = (event) => {
    const name = event.target.id;
    const value = event.target.value;
    this.setState((prevState, props) => {
      const creditApplication = prevState.creditApplication;
      return _.set(creditApplication, name, value);
    });
  }

  _clearcreditApplication = () => {
    this.setState((prevState, props) => {
      const creditApplication = prevState.creditApplication;
      _.mapValues(creditApplication, (o) => _.isString(o) ? '' : o);
      _.mapValues(creditApplication, (o) => _.isBoolean(o) ? false : o);
    });
  }

  onSubmit = (event) => {
    console.log(this.state.creditApplication);
    this.setState({ formData: { showSpinner: true } });
    axios.post(url, this.state.creditApplication)
      .then(response => this._updateAlert(
        'Your credit application was successfully submitted.',
        'success',
        true,
      ))
      .catch(error => this._updateAlert(
        'An error occurred while processing your credit application; please try again.',
        'warning',
        true,
      ))
      .finally(() => {
        this._showAlert(false);
      });
  }

  _updateAlert(alertText, alertVariant, showAlert) {
    this.setState((prevState, props) => {
      const formData = prevState.formData;
      const update = {
        alertText,
        alertVariant,
        showAlert,
      };
      return _.merge(formData, update);
    });
  }

  render() {
    debugger
    const creditApplication = this.state.creditApplication;
    const companyInformation = creditApplication.companyInformation;
    const formData = this.state.formData;
    return (
      <Container fluid="md">
        <Header/>
        <Form>
          <Card>
            <Card.Body>
              <Card.Title>Company Information</Card.Title>
              
            </Card.Body>
          </Card>

          <Row>
            <Col>
              <Form.Group controlId="employerName">
                <Form.Label>Employer Name</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Name of your current employer" 
                  value={creditApplication.employerName}
                  onChange={this.onTextChange}/>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="yearsEmployed">
                <Form.Label>Years of Employment</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="How many years working" 
                  value={creditApplication.yearsEmployed}
                  onChange={this.onTextChange}/>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="yearlySalary">
                <Form.Label>Yearly Salary</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Estimated salary" 
                  value={creditApplication.yearlySalary}
                  onChange={this.onTextChange}/>
              </Form.Group>
            </Col>
          </Row>

          <Form.Group controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="Enter email" 
              value={creditApplication.email}
              onChange={this.onTextChange}/>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group>
            <Form.Check 
              custom
              type="checkbox"
              id="creditCheckAgreement"
              label="I agree to allow Dover to run a credit check on me."
              checked={creditApplication.checked}
              onChange={this.onCheckboxChange}/>
          </Form.Group>

          <Button 
              variant="primary" 
              disabled={!creditApplication.creditCheckAgreement}
              onClick={this.onSubmit}
          >
            Submit
            { formData.showSpinner ? ' '(
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
            ) : null }
          </Button>

          { formData.showAlert &&
            <Alert variant={formData.alertVariant} onClose={this.onAlertClosed} dismissible>
              <p>
                {formData.alertText}
              </p>
            </Alert>
          }
        </Form>
        
        <h5>Please attach a copy of your W9</h5>
      </Container>
    );
  }
}
