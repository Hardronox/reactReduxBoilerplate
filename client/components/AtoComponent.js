import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class AtoComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <div className="container">
          <div className="row" >
            <h2>Ato</h2>
          </div>
        </div>
      </div>
    );
  }
}

AtoComponent.propTypes = {
  children: PropTypes.element,

};

export default AtoComponent;
