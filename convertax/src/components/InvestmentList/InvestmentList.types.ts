export interface Investment {
    id: number;
    owner: string;
    creationDate: string;
    initialValue: number;
    withdrawals: { date: string; amount: number }[];
  }
  