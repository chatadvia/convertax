import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import InvestmentForm from './index';

describe('InvestmentForm', () => {
  test('renders the form', () => {
    render(<InvestmentForm />);
    expect(screen.getByLabelText(/Proprietário/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Data de Criação/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Valor Inicial/i)).toBeInTheDocument();
  });

  test('disables submit button when form is invalid', () => {
    render(<InvestmentForm />);
    const submitButton = screen.getByRole('button', { name: /Criar/i });
    expect(submitButton).toBeDisabled();
  });

  test('enables submit button when form is valid', () => {
    render(<InvestmentForm />);
    fireEvent.change(screen.getByLabelText(/Proprietário/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/Data de Criação/i), { target: { value: '2023-01-01' } });
    fireEvent.change(screen.getByLabelText(/Valor Inicial/i), { target: { value: '1000' } });

    const submitButton = screen.getByRole('button', { name: /Criar/i });
    expect(submitButton).toBeEnabled();
  });

  test('saves the investment in localStorage', () => {
    render(<InvestmentForm />);
    fireEvent.change(screen.getByLabelText(/Proprietário/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/Data de Criação/i), { target: { value: '2023-01-01' } });
    fireEvent.change(screen.getByLabelText(/Valor Inicial/i), { target: { value: '1000' } });

    const submitButton = screen.getByRole('button', { name: /Criar/i });
    fireEvent.click(submitButton);

    const investments = JSON.parse(localStorage.getItem('investments') || '[]');
    expect(investments).toHaveLength(1);
    expect(investments[0].owner).toBe('John Doe');
  });
});
