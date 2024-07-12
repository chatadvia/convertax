export interface Investment {
    id: number;
    owner: string;
    creationDate: string;
    initialValue: number;
    withdrawals: Withdrawal[];
  }
  
  export interface Withdrawal {
    date: string;
    amount: number;
  }
  
  export interface InvestmentFormProps {}
  