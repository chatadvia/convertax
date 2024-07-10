export const calculateCompoundInterest = (initialValue: number, months: number, rate: number = 0.52) => {
    return initialValue * Math.pow(1 + rate / 100, months);
  };
  
  export const calculateTax = (withdrawalAmount: number, months: number) => {
    let taxRate;
    if (months < 12) {
      taxRate = 0.225;
    } else if (months < 24) {
      taxRate = 0.185;
    } else {
      taxRate = 0.15;
    }
    return withdrawalAmount * taxRate;
  };
  