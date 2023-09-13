import React, { useState } from 'react';
import propTypes from 'prop-types';

const CalculatorButtons = ({ handleClickedButton }) => {
  const [activeButton, setActiveButton] = useState(null);
  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
    handleClickedButton(buttonName);
  };

  const buttons = [
    { id: 'ac', label: 'AC' },
    { id: 'plus-minus', label: '+/-' },
    { id: 'percent', label: '%' },
    { id: 'divide', label: '÷' },
    { id: 'seven', label: '7' },
    { id: 'eight', label: '8' },
    { id: 'nine', label: '9' },
    { id: 'multiply', label: 'x' },
    { id: 'four', label: '4' },
    { id: 'five', label: '5' },
    { id: 'six', label: '6' },
    { id: 'minus', label: '-' },
    { id: 'one', label: '1' },
    { id: 'two', label: '2' },
    { id: 'three', label: '3' },
    { id: 'plus', label: '+' },
    { id: 'zero', label: '0', class: 'span-2' },
    { id: 'decimal', label: '.' },
    { id: 'equals', label: '=' },
  ];

  return (
    <div className="all-btns">
      {buttons.map((button) => (
        <button
          key={button.id}
          type="button"
          className={`grid-item ${button.class}`}
          onClick={() => handleClick(button.label)}
          style={activeButton === button.label ? { backgroundColor: 'purple' } : {}}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
};

CalculatorButtons.propTypes = {
  handleClickedButton: propTypes.func.isRequired,
};
export default CalculatorButtons;
