// components/CurrencyInput.tsx
'use client';
import React from 'react';
import { TextField } from '@mui/material';

interface CurrencyInputProps {
  value: string;
  onChange: (value: string) => void;
  label: string;
}

const CurrencyInput: React.FC<CurrencyInputProps> = ({ value, onChange, label }) => {
  const formatCurrency = (value: string) => {
    const numberValue = parseFloat(value.replace(/\D/g, '')) / 100;
    return numberValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/\D/g, '');
    onChange(rawValue);
  };

  return (
    <TextField
      fullWidth
      label={label}
      value={formatCurrency(value)}
      onChange={handleChange}
      InputLabelProps={{ shrink: true }}
    />
  );
};

export default CurrencyInput;
