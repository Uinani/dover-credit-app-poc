import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';
import axios from 'axios';

import Header from '../components/header.component';

const userData = {
  firstName: '',
  lastName: '',
  addressLine1: '',
  addressLine2: '',
  city: '',
  state: '',
  zipCode: '',
  employerName: '',
  yearsEmployed: '',
  yearlySalary: '',
  email: '',
  creditCheckAgreement: false,
};

const formData = {
  alertVariant: '',
  alertText: '',
  showAlert: false,
  showSpinner: false,
};

const url = 'https://dovercreditapppoc.azurewebsites.net/api/OnCreditApplicationPost';
// const url = ' http://localhost:7071/api/OnCreditApplicationPost';

export default class CreditApplication extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      formData,
      userData,
     };
  }

  onAlertClosed = (event) => {
    console.log('Alert closed!');
    formData.showAlert = false;
    this._updateFormData();
    if (this.state.formData.alertVariant !== 'success') {
      this._clearUserData();
    }
  }

  onCheckboxChange = (event) => {
    const name = event.target.id;
    const value = event.target.checked;
    this._updateUserData(name, value);
  }
  
  onTextChange = (event) => {
    const name = event.target.id;
    const value = event.target.value;
    this._updateUserData(name, value);
  }

  _updateFormData = () => {
    this.setState({ 
      formData,
      userData, 
    });
  }

  _updateUserData = (name, value) => {
    userData[name] = value;
    
    this.setState({ 
      formData,
      userData, 
    });
  }

  _clearUserData = () => {
    userData.firstName = '';
    userData.lastName = '';
    userData.addressLine1 = '';
    userData.addressLine2 = '';
    userData.city = '';
    userData.state = '';
    userData.zipCode = '';
    userData.employerName = '';
    userData.yearsEmployed = '';
    userData.yearlySalary = '';
    userData.email = '';
    userData.creditCheckAgreement = false;

    this.setState({ 
      formData,
      userData, 
    });
  }

  onSubmit = (event) => {
    console.log(userData);
    formData.showSpinner = true;
    axios.post(url, userData)
      .then(response => {
        formData.alertVariant = 'success';
        formData.alertText = 'Your credit application was successfully submitted.';
        formData.showAlert = true;
      })
      .catch(error => {
        formData.alertVariant = 'warning';
        formData.alertText = 'An error occurred while processing your credit application; please try again.';
        formData.showAlert = true;
      })
      .finally(() => {
        formData.showSpinner = false;
        this._updateFormData();
      });
  }

  render() {
    return (
      <Container fluid="md">
        <Header/>
        <Form>
          <Row>
            <Col>
              <Form.Group controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Your first name" 
                  value={this.state.userData.firstName}
                  onChange={this.onTextChange}/>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Your last name" 
                  value={this.state.userData.lastName}
                  onChange={this.onTextChange}/>
              </Form.Group>
            </Col>
          </Row>
          
          <Form.Group controlId="addressLine1">
            <Form.Label>Address Line 1</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Street Address" 
              value={this.state.userData.addressLine1}
              onChange={this.onTextChange}/>
          </Form.Group>

          <Form.Group controlId="addressLine2">
            <Form.Label>Address Line 2</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Suite or Apt. No." 
              value={this.state.userData.addressLine2}
              onChange={this.onTextChange}/>
          </Form.Group>

          <Row>
            <Col>
              <Form.Group controlId="city">
                <Form.Label>City</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="City"
                  value={this.state.userData.city}
                  onChange={this.onTextChange}/>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="state">
                <Form.Label>State</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="State" 
                  value={this.state.userData.state}
                  onChange={this.onTextChange}/>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="zipCode">
                <Form.Label>Zip Code</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Zip Code" 
                  value={this.state.userData.zipCode}
                  onChange={this.onTextChange}/>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group controlId="employerName">
                <Form.Label>Employer Name</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Name of your current employer" 
                  value={this.state.userData.employerName}
                  onChange={this.onTextChange}/>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="yearsEmployed">
                <Form.Label>Years of Employment</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="How many years working" 
                  value={this.state.userData.yearsEmployed}
                  onChange={this.onTextChange}/>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="yearlySalary">
                <Form.Label>Yearly Salary</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Estimated salary" 
                  value={this.state.userData.yearlySalary}
                  onChange={this.onTextChange}/>
              </Form.Group>
            </Col>
          </Row>

          <Form.Group controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="Enter email" 
              value={this.state.userData.email}
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
              checked={this.state.userData.checked}
              onChange={this.onCheckboxChange}/>
          </Form.Group>

          <Button 
              variant="primary" 
              disabled={!this.state.userData.creditCheckAgreement}
              onClick={this.onSubmit}
          >
            Submit
            { this.state.formData.showSpinner ? ' '(
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
            ) : null }
          </Button>

          { this.state.formData.showAlert &&
            <Alert variant={this.state.formData.alertVariant} onClose={this.onAlertClosed} dismissible>
              <p>
                {this.state.formData.alertText}
              </p>
            </Alert>
          }
        </Form>
      </Container>
    );
  }
}
