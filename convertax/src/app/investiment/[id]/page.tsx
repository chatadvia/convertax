import InvestmentDetails from '@/components/InvestmentDetails';
import { NextPage } from 'next';

const InvestmentPage: NextPage = () => {
  const investmentMock = {
    owner: 'João Silva',
    creationDate: '2023-01-01',
    initialValue: 10000,
    months: 18,
    withdrawals: [
      { date: '2023-06-01', amount: 500 },
      { date: '2023-12-01', amount: 700 },
    ],
  };

  return <InvestmentDetails {...investmentMock} />;
};

export default InvestmentPage;
