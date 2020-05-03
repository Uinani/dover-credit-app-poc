import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';
import axios from 'axios';

import Header from '../components/header.component';

const userData = {
  firstName: null,
  lastName: null,
  addressLine1: null,
  addressLine2: null,
  city: null,
  state: null,
  zipCode: null,
  employerName: null,
  yearsEmployed: null,
  yearlySalary: null,
  email: null,
  creditCheckAgreement: null,
};

const formData = {
  alertVariant: '',
  alertText: '',
  showAlert: false,
  showSpinner: false,
};

const url = '';

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
    this.updateFormData();
  }

  onCheckboxChange = (event) => {
    const name = event.target.id;
    const value = event.target.checked;
    this.updateUserData(name, value);
  }
  
  onTextChange = (event) => {
    const name = event.target.id;
    const value = event.target.value;
    this.updateUserData(name, value);
  }

  submitForm = (event) => {
    console.log(userData);
    formData.showSpinner = true;
    axios.post(url, userData)
      .then(response => {
        formData.alertVariant = 'primary';
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
        this.updateFormData();
      });
  }

  updateFormData = () => {
    this.setState({ 
      formData,
      userData, 
    });
  }

  updateUserData = (name, value) => {
    userData[name] = value;
    
    this.setState({ 
      formData,
      userData, 
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
                <Form.Control type="text" placeholder="Your first name" onChange={this.onTextChange}/>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Your last name" onChange={this.onTextChange}/>
              </Form.Group>
            </Col>
          </Row>
          
          <Form.Group controlId="addressLine1">
            <Form.Label>Address Line 1</Form.Label>
            <Form.Control type="text" placeholder="Street Address" onChange={this.onTextChange}/>
          </Form.Group>

          <Form.Group controlId="addressLine2">
            <Form.Label>Address Line 2</Form.Label>
            <Form.Control type="text" placeholder="Suite or Apt. No." onChange={this.onTextChange}/>
          </Form.Group>

          <Row>
            <Col>
              <Form.Group controlId="city">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="City" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="state">
                <Form.Label>State</Form.Label>
                <Form.Control type="text" placeholder="State" onChange={this.onTextChange}/>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="zipCode">
                <Form.Label>Zip Code</Form.Label>
                <Form.Control type="text" placeholder="Zip Code" onChange={this.onTextChange}/>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group controlId="employerName">
                <Form.Label>Employer Name</Form.Label>
                <Form.Control type="text" placeholder="Name of your current employer" onChange={this.onTextChange}/>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="yearsEmployed">
                <Form.Label>Years of Employment</Form.Label>
                <Form.Control type="text" placeholder="How many years working" onChange={this.onTextChange}/>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="yearlySalary">
                <Form.Label>Yearly Salary</Form.Label>
                <Form.Control type="text" placeholder="Estimated salary" onChange={this.onTextChange}/>
              </Form.Group>
            </Col>
          </Row>

          <Form.Group controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={this.onTextChange}/>
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
              onChange={this.onCheckboxChange}/>
          </Form.Group>

          <Button 
              variant="primary" 
              disabled={!this.state.userData.creditCheckAgreement}
              onClick={this.submitForm}
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
