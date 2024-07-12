'use client';
import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { StyledContainer, StyledTitle, StyledForm, StyledButton, HeaderContainer } from './InvestmentForm.styles';
import { InvestmentFormProps, Investment } from './InvestmentForm.types';
import { useGetCurrentDate } from '@/utils/hook/useGetCurrentDate';
import { useRouter } from 'next/navigation';
import CurrencyInput from '../CurrencyInput/CurrencyInput';

const InvestmentForm: React.FC<InvestmentFormProps> = () => {
  const [owner, setOwner] = useState('');
  const [creationDate, setCreationDate] = useState('');
  const [initialValue, setInitialValue] = useState('0');
  const currentDate = useGetCurrentDate();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newInvestment: Investment = { 
      id: Date.now(), 
      owner, 
      creationDate, 
      initialValue: parseFloat(initialValue) / 100,
      withdrawals: []
    };

    const investments = JSON.parse(localStorage.getItem('investments') || '[]');
    investments.push(newInvestment);
    localStorage.setItem('investments', JSON.stringify(investments));

    router.push('/');
  };

  const isValid = () => {
    return owner && creationDate && parseFloat(initialValue) > 0;
  };

  return (
    <StyledContainer maxWidth="sm">
      <HeaderContainer>
        <StyledTitle variant="h4" gutterBottom>
          Criar Investimento
        </StyledTitle>
        <Button variant="contained" color="primary" onClick={() => router.push('/')}>
          Lista de Investimentos
        </Button>
      </HeaderContainer>
      <StyledForm onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Proprietário"
          value={owner}
          onChange={(e) => setOwner(e.target.value)}
        />
        <TextField
          fullWidth
          type="date"
          label="Data de Criação"
          InputLabelProps={{ shrink: true }}
          value={creationDate}
          onChange={(e) => setCreationDate(e.target.value)}
          inputProps={{ max: currentDate }}
        />
        <CurrencyInput
          label="Valor Inicial"
          value={initialValue}
          onChange={setInitialValue}
        />
        <StyledButton variant="contained" color="primary" type="submit" disabled={!isValid()}>
          Criar
        </StyledButton>
      </StyledForm>
    </StyledContainer>
  );
};

export default InvestmentForm;
