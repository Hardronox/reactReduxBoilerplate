import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class LocationComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <div className="container">
          <div className="row" >
            <h2>Location</h2>
          </div>
        </div>
      </div>
    );
  }
}

LocationComponent.propTypes = {
  children: PropTypes.element,

};

export default LocationComponent;
