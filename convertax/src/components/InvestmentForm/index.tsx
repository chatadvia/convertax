'use client';
import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { StyledContainer, StyledTitle, StyledForm, StyledButton } from './InvestmentForm.styles';
import { InvestmentFormProps, Investment } from './InvestmentForm.types';
import { useGetCurrentDate } from '@/utils/hook/useGetCurrentDate';

// Função para obter a data atual no formato YYYY-MM-DD
// const getCurrentDate = () => {
//   const today = new Date();
//   const yyyy = today.getFullYear();
//   const mm = String(today.getMonth() + 1).padStart(2, '0'); // Janeiro é 0!
//   const dd = String(today.getDate()).padStart(2, '0');
//   return `${yyyy}-${mm}-${dd}`;
// };

const InvestmentForm: React.FC<InvestmentFormProps> = () => {
  const [owner, setOwner] = useState('');
  const [creationDate, setCreationDate] = useState('');
  const [initialValue, setInitialValue] = useState('');
  const currentDate = useGetCurrentDate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newInvestment: Investment = { 
      id: Date.now(), 
      owner, 
      creationDate, 
      initialValue: parseFloat(initialValue),
      withdrawals: [] // Inicializa a lista de retiradas
    };

    // Salva o novo investimento no localStorage
    const investments = JSON.parse(localStorage.getItem('investments') || '[]');
    investments.push(newInvestment);
    localStorage.setItem('investments', JSON.stringify(investments));

    console.log(newInvestment);
  };

  const isValid = () => {
    return owner && creationDate && parseFloat(initialValue) > 0;
  };

  return (
    <StyledContainer maxWidth="sm">
      <StyledTitle variant="h4" gutterBottom>
        Criar Investimento
      </StyledTitle>
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
          inputProps={{ max: currentDate }} // Define a data máxima como hoje
        />
        <TextField
          fullWidth
          type="number"
          label="Valor Inicial"
          value={initialValue}
          onChange={(e) => setInitialValue(e.target.value)}
          inputProps={{ min: "0" }} // Impede que o usuário insira um valor negativo
        />
        <StyledButton variant="contained" color="primary" type="submit" disabled={!isValid()}>
          Criar
        </StyledButton>
      </StyledForm>
    </StyledContainer>
  );
};

export default InvestmentForm;
