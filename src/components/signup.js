import React from 'react';
import { ThemeProvider, createTheme, CssBaseline, Typography, Box } from '@mui/material';
import SignUpForm from './signupform';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    fontFamily: 'Quicksand, Arial, sans-serif',
    h1: {
      fontSize: '2rem',
      display: 'flex',
      alignItems: 'center',
      fontWeight: 150,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
      color: '#888',
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          padding: '16px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Typography variant="h1">
            <Box component="img" src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="Logo" sx={{ width: 30, height: 30, mr: 1 }} />
            Glycogen
          </Typography>
          <Typography variant="h2">
            /signup
          </Typography>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <SignUpForm />
      </div>
    </ThemeProvider>
  );
}