import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ValuationText from '.';

describe('ValuationText', () => {
  test('renders positive valuation in green', () => {
    const { getByText } = render(<ValuationText percentageIncrease={10} />);
    const element = getByText('10.00%');
    expect(element).toBeInTheDocument();
    expect(element).toHaveStyle('color: green');
  });

  test('renders negative valuation in red', () => {
    const { getByText } = render(<ValuationText percentageIncrease={-10} />);
    const element = getByText('-10.00%');
    expect(element).toBeInTheDocument();
    expect(element).toHaveStyle('color: red');
  });
});
