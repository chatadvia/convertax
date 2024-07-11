import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { useRouter } from 'next/navigation';
import InvestmentList from '.';

// Mocking useRouter
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

// Mocking localStorage
const mockInvestments = [
  {
    id: '1',
    owner: 'John Doe',
    creationDate: '2023-01-01',
    initialValue: 1000,
  },
];

beforeEach(() => {
  localStorage.setItem('investments', JSON.stringify(mockInvestments));
  (useRouter as jest.Mock).mockReturnValue({ push: jest.fn() });
});

afterEach(() => {
  localStorage.clear();
  jest.clearAllMocks();
});

describe('InvestmentList Component', () => {
  test('renders the investment list with correct data', () => {
    render(<InvestmentList />);

    expect(screen.getByText('Lista de Investimentos')).toBeInTheDocument();
    expect(screen.getByText('Criar novos investimentos')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('2023-01-01')).toBeInTheDocument();
    expect(screen.getByText('R$1000.00')).toBeInTheDocument();
  });

  test('navigates to create investment page on button click', () => {
    const { push } = useRouter();
    render(<InvestmentList />);

    fireEvent.click(screen.getByText('Criar novos investimentos'));
    expect(push).toHaveBeenCalledWith('/createInvestiment');
  });

  // Add more tests as needed
});
