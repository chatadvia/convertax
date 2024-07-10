'use client';
import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

// Estilos para garantir a responsividade
const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: '2rem',
  padding: '0 1rem',
  [theme.breakpoints.up('sm')]: {
    padding: '0',
  },
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
  marginBottom: '1.5rem',
  fontSize: '1.5rem',
  [theme.breakpoints.up('sm')]: {
    fontSize: '2.125rem',
  },
}));

const StyledForm = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  alignSelf: 'stretch',
  [theme.breakpoints.up('sm')]: {
    alignSelf: 'flex-end',
    width: 'auto',
  },
}));

const InvestmentForm: React.FC = () => {
  const [owner, setOwner] = useState('');
  const [creationDate, setCreationDate] = useState('');
  const [initialValue, setInitialValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica para criar investimento
    console.log({ owner, creationDate, initialValue });
  };

  const isValid = () => {
    return owner && creationDate && parseFloat(initialValue) > 0;
  };

  return (
    <StyledContainer maxWidth="sm">
      <StyledTitle variant="h4" component="h1" gutterBottom>
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
