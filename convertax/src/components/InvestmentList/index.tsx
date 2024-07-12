'use client';
import React, { useEffect, useState } from 'react';
import { Typography, Table, TableBody, TableCell, TableHead, TableRow, Button } from '@mui/material';
import { Investment } from './InvestmentList.types';
import { StyledTableContainer, HeaderContainer, StyledContainer } from './InvestmentList.styles';
import { useRouter } from 'next/navigation';
import { calculateCompoundInterest } from '../../utils/investmentUtils';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import ValuationText from '../ValuationText';
import { investmentsMock } from '@/mocks/investiments';

const InvestmentList: React.FC = () => {
  const [investments, setInvestments] = useState<Investment[]>([]);
  const router = useRouter();

  useEffect(() => {
    const storedInvestments = JSON.parse(localStorage.getItem('investments') || '[]');
    const combinedInvestments = [...investmentsMock, ...storedInvestments];
    setInvestments(combinedInvestments);
  }, []);

  const handleCreateNewInvestment = () => {
    router.push('/createInvestiment');
  };

  return (
    <StyledContainer>
      <HeaderContainer>
        <Typography variant="h4" component="h1" gutterBottom>
          Lista de Investimentos
        </Typography>
        <Button variant="contained" color="primary" onClick={handleCreateNewInvestment}>
          Criar novos investimentos
        </Button>
      </HeaderContainer>
      <StyledTableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Proprietário</TableCell>
              <TableCell>Data de Criação</TableCell>
              <TableCell>Valor Inicial</TableCell>
              <TableCell>Valor Total com Rendimentos</TableCell>
              <TableCell>Valorização</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {investments.map((investment) => {
              const creationDate = new Date(investment.creationDate);
              const now = new Date();
              const months = (now.getFullYear() - creationDate.getFullYear()) * 12 + (now.getMonth() - creationDate.getMonth());
              const totalValue = calculateCompoundInterest(investment.initialValue, months);
              const percentageIncrease = ((totalValue - investment.initialValue) / investment.initialValue) * 100;

              return (
                <React.Fragment key={investment.id}>
                  <TableRow>
                    <TableCell>{investment.owner}</TableCell>
                    <TableCell>{investment.creationDate}</TableCell>
                    <TableCell>R${investment.initialValue.toFixed(2)}</TableCell>
                    <TableCell>R${totalValue.toFixed(2)}</TableCell>
                    <TableCell>
                      <ValuationText percentageIncrease={percentageIncrease} />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan={5}>
                      <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={Array.from({ length: months }, (_, i) => ({
                          month: i + 1,
                          value: calculateCompoundInterest(investment.initialValue, i + 1),
                          percentage: ((calculateCompoundInterest(investment.initialValue, i + 1) - investment.initialValue) / investment.initialValue) * 100,
                        }))}>
                          <Line type="monotone" dataKey="value" stroke="#8884d8" name="Valor" />
                          <Line type="monotone" dataKey="percentage" stroke="#82ca9d" name="Valorização (%)" />
                          <CartesianGrid stroke="#ccc" />
                          <XAxis dataKey="month" />
                          <YAxis />
                          <Tooltip />
                        </LineChart>
                      </ResponsiveContainer>
                    </TableCell>
                  </TableRow>
                </React.Fragment>
              );
            })}
          </TableBody>
        </Table>
      </StyledTableContainer>
    </StyledContainer>
  );
};

export default InvestmentList;
