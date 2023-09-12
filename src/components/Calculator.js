import React from 'react';
import CalculatorButtons from './calculatorButtons';
import CalculatorDisplay from './CalculatorDisplay';
import '../styles/style.css';

const Calculator = () => (
  <div className="calculator-container">
    <CalculatorDisplay />
    <CalculatorButtons />

  </div>
);

export default Calculator;
