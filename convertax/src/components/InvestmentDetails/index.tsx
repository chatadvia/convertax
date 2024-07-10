'use client';
import React from 'react';
import { Container, Typography, Box, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { calculateCompoundInterest, calculateTax } from '../../utils/investmentUtils';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

interface Withdrawal {
  date: string;
  amount: number;
}

interface InvestmentDetailsProps {
  owner: string;
  creationDate: string;
  initialValue: number;
  months: number;
  withdrawals: Withdrawal[];
}

const InvestmentDetails: React.FC<InvestmentDetailsProps> = ({ owner, creationDate, initialValue, months, withdrawals }) => {
  const expectedBalance = calculateCompoundInterest(initialValue, months);
  const totalWithdrawn = withdrawals.reduce((acc, curr) => acc + curr.amount, 0);
  const taxes = withdrawals.reduce((acc, curr) => acc + calculateTax(curr.amount, months), 0);

  const data = Array.from({ length: months }, (_, i) => ({
    month: i + 1,
    balance: calculateCompoundInterest(initialValue, i + 1),
  }));

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Detalhes do Investimento
      </Typography>
      <Box mb={2}>
        <Typography variant="h6">Proprietário: {owner}</Typography>
      </Box>
      <Box mb={2}>
        <Typography variant="h6">Data de Criação: {creationDate}</Typography>
      </Box>
      <Box mb={2}>
        <Typography variant="h6">Valor Inicial: R${initialValue.toFixed(2)}</Typography>
      </Box>
      <Box mb={2}>
        <Typography variant="h6">Saldo Esperado: R${expectedBalance.toFixed(2)}</Typography>
      </Box>
      <Box mb={2}>
        <Typography variant="h6">Total Retirado: R${totalWithdrawn.toFixed(2)}</Typography>
      </Box>
      <Box mb={2}>
        <Typography variant="h6">Impostos: R${taxes.toFixed(2)}</Typography>
      </Box>
      <Box mb={2}>
        <Typography variant="h6">Histórico de Retiradas:</Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Data</TableCell>
              <TableCell>Valor</TableCell>
              <TableCell>Imposto</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {withdrawals.map((withdrawal, index) => (
              <TableRow key={index}>
                <TableCell>{withdrawal.date}</TableCell>
                <TableCell>R${withdrawal.amount.toFixed(2)}</TableCell>
                <TableCell>R${calculateTax(withdrawal.amount, months).toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
      <Box>
        <Typography variant="h6">Projeção de Saldo:</Typography>
        <LineChart width={600} height={300} data={data}>
          <Line type="monotone" dataKey="balance" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </Box>
    </Container>
  );
};

export default InvestmentDetails;
