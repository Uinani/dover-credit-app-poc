import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import React from 'react';
import Row from 'react-bootstrap/Row';

import Header from '../components/header.component';

const formControls = {
  firstName: null,
  lastName: null,
  addressLine1: null,
  addressLine2: null,
  city: null,
  state: null,
  zipCode: null,
  employerName: null,
  yearsEmployed: null,
  email: null,
  creditCheckAgreement: null,
}

export default class CreditApplication extends React.Component {
  constructor(props) {
    super(props);
    this.state = { formControls };

    this.onCheckboxChange = this.onCheckboxChange.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  onCheckboxChange(event) {
    const name = event.target.id;
    const value = event.target.checked;

    formControls[name] = value;
    
    this.setState({ formControls }); 
  }

  onTextChange(event) {
    const name = event.target.id;
    const value = event.target.value;
    
    formControls[name] = value;
    
    this.setState({ formControls }); 
  }

  submitForm(event) {
    console.log(formControls);
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
              disabled={!this.state.formControls.creditCheckAgreement}
              onClick={this.submitForm}>
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}
