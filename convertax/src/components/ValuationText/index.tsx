import React from 'react';
import { ValueText } from './ValuationText.styles';

interface ValuationTextProps {
  percentageIncrease: number;
}

const ValuationText: React.FC<ValuationTextProps> = ({ percentageIncrease }) => {
  return (
    <ValueText isPositive={percentageIncrease >= 0}>
      {percentageIncrease.toFixed(2)}%
    </ValueText>
  );
};

export default ValuationText;
