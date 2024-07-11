import { styled } from '@mui/material/styles';

export const ValueText = styled('span')<{ isPositive: boolean }>(({ isPositive }) => ({
  color: isPositive ? 'green' : 'red',
}));
