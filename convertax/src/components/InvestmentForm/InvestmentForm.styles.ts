import { styled } from '@mui/material/styles';
import { Container, Typography, Button } from '@mui/material';

export const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: '2rem',
  padding: '0 1rem',
  backgroundColor: '#FFFFFF', 
  color: '#000000', 
  minHeight: '100vh',
  minWidth: '100vw', 
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const StyledTitle = styled(Typography)(({ theme }) => ({
  marginBottom: '1.5rem',
  fontSize: '1.5rem',
  color: '#000000',
  [theme.breakpoints.up('sm')]: {
    fontSize: '2.125rem',
  },
}));

export const StyledForm = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  width: '100%',
  maxWidth: '500px',
  backgroundColor: '#FFFFFF',
  color: '#000000',
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  alignSelf: 'stretch',
  color: '#000000',
  [theme.breakpoints.up('sm')]: {
    alignSelf: 'flex-end',
    width: 'auto',
  },
}));

export const HeaderContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  maxWidth: '500px',
  marginBottom: '1rem',
  backgroundColor: '#FFFFFF',
  color: '#000000',
}));
