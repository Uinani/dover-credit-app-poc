import Media from 'react-bootstrap/Media';
import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <Media>
          <img
            width={128}
            height={64}
            className="mr-3"
            src="logo-dover.png"
            alt="Generic placeholder"
          />
          <Media.Body>
            <h5>Credit Application POC</h5>
            <p>
              Please fill out and submit the application.
            </p>
          </Media.Body>
        </Media>
      </div>
    );
  }

}
