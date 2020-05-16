import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import React from 'react';
import Row from 'react-bootstrap/Row';

export default class AddressComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onTextChange = (event) => {
    const name = event.target.id;
    const value = event.target.value;

    this.props.onAddressChange(name, value);
  };

  render() {
    const address = this.props.address;
    return (
      <div>
        <Form.Group controlId="addressLine1">
          <Form.Label>Address Line 1</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Street Address" 
            value={address.addressLine1}
            onChange={this.onTextChange}/>
        </Form.Group>

        <Form.Group controlId="addressLine2">
          <Form.Label>Address Line 2</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Suite or Apt. No." 
            value={address.addressLine2}
            onChange={this.onTextChange}/>
        </Form.Group>

        <Row>
          <Col>
            <Form.Group controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="City"
                value={address.city}
                onChange={this.onTextChange}/>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="state">
              <Form.Label>State</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="State" 
                value={address.state}
                onChange={this.onTextChange}/>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="zipCode">
              <Form.Label>Zip Code</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Zip Code" 
                value={address.zipCode}
                onChange={this.onTextChange}/>
            </Form.Group>
          </Col>
        </Row>
      </div>
    );
  }
}
