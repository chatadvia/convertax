import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledTableContainer = styled(Container)(({ theme }) => ({
  marginTop: '2rem',
  padding: '0 1rem',
  [theme.breakpoints.up('sm')]: {
    padding: '0',
  },
}));

export const HeaderContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '1rem',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    '& > *': {
      marginBottom: '0.5rem',
    },
  },
}));

export const ValueText = styled('span')<{ isPositive: boolean }>(({ isPositive }) => ({
  color: isPositive ? 'green' : 'red',
}));
