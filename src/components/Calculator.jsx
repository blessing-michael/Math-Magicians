import React, { useState } from 'react';
import '../styles/style.css';
import calculate from '../utils/calculate';
import CalculatorDisplay from './CalculatorDisplay';
import CalculatorButtons from './CalculatorButtons';

const Calculator = () => {
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClickedButton = (buttonName) => {
    const updatedData = calculate(calculatorData, buttonName);
    setCalculatorData(updatedData);
  };

  return (
    <div className="calculator-container">
      <CalculatorDisplay displayValue={calculatorData.next || calculatorData.total || '0'} />
      <CalculatorButtons handleClickedButton={handleClickedButton} />
    </div>
  );
};

export default Calculator;
