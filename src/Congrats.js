/**
* Functional React Component for Congratulatory message
* @function
* @return {JSX.Element}
*/

import React from 'react';
import PropTypes from 'prop-types';


const Congrats = (props) => {
    if (props.success) {
      return(
    <div data-test="component-congrats" className="alert alert-success">
    <span data-test="congrats-message">
      Congratulations! You guessed the word!
      </span>
    </div>
    );
  } else {
    return (
    <div data-test="component-congrats" />
  );
  }
};

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
}; // We expect this component to pass a prop type
   // Called success that is boolean
   //It is a required prop

export default Congrats;
