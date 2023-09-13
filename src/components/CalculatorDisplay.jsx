import React from 'react';
import PropTypes from 'prop-types';

const CalculatorDisplay = ({ displayValue }) => (
  <>
    <h2 className="intro-text">Your Perfect Math Calculator</h2>
    <input type="text" value={displayValue} style={{ color: 'whitesmoke' }} disabled />
  </>
);

CalculatorDisplay.propTypes = {
  displayValue: PropTypes.string.isRequired,
};

export default CalculatorDisplay;
