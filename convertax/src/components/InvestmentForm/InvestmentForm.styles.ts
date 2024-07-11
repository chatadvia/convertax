import { styled } from '@mui/material/styles';
import { Container, Typography, Button } from '@mui/material';

// Estilos para garantir a responsividade
export const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: '2rem',
  padding: '0 1rem',
  [theme.breakpoints.up('sm')]: {
    padding: '0',
  },
}));

export const StyledTitle = styled(Typography)(({ theme }) => ({
  marginBottom: '1.5rem',
  fontSize: '1.5rem',
  [theme.breakpoints.up('sm')]: {
    fontSize: '2.125rem',
  },
}));

export const StyledForm = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  alignSelf: 'stretch',
  [theme.breakpoints.up('sm')]: {
    alignSelf: 'flex-end',
    width: 'auto',
  },
}));
