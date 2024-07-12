import { Investment } from "@/components/InvestmentForm/InvestmentForm.types";

export const investmentsMock: Investment[] = [
  {
    id: 1,
    owner: 'John Doe',
    creationDate: '2021-01-01',
    initialValue: 1000,
    withdrawals: [],
  },
  {
    id: 2,
    owner: 'Jane Smith',
    creationDate: '2022-06-15',
    initialValue: 1500,
    withdrawals: [],
  },
  {
    id: 3,
    owner: 'Alice Johnson',
    creationDate: '2023-03-20',
    initialValue: 2000,
    withdrawals: [],
  },
];
