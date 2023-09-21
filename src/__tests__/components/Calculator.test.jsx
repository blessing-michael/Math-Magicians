import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Calculator from '../../components/Calculator';

describe('Calculator', () => {
  let container; let getByRole; let
    getByText;

  beforeEach(() => {
    const renderResult = render(<Calculator />);
    container = renderResult.container;
    getByRole = renderResult.getByRole;
    getByText = renderResult.getByText;
  });

  test('renders correctly', () => {
    expect(container).toMatchSnapshot();
  });

  test('displays correct value on button click', () => {
    const displayElement = getByRole('textbox');

    // Simulate button clicks and assert display value updates accordingly
    fireEvent.click(getByText('1'));
    expect(displayElement).toHaveDisplayValue('1');

    fireEvent.click(getByText('+'));
    expect(displayElement).toHaveDisplayValue('1');

    fireEvent.click(getByText('5'));
    expect(displayElement).toHaveDisplayValue('5');

    fireEvent.click(getByText('='));
    expect(displayElement).toHaveDisplayValue('6');
  });
});
