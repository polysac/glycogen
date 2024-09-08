import React from 'react';
import { ThemeProvider, createTheme, CssBaseline, Typography, Box } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    fontFamily: 'Quicksand, Arial, sans-serif', // Set "Quicksand" as the primary font
    h1: {
      fontSize: '4rem',
      display: 'flex',
      alignItems: 'center',
      fontWeight: 150,
    },
    h2: {
      fontSize: '4rem',
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
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          height: "100vh",
          flexDirection: 'row',
        }}
      >
        <Typography variant="h1">
          <Box component="img" src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="Logo" sx={{ width: 50, height: 50, mr: 2 }} />
          Glycogen
        </Typography>
        <Typography variant="h2">
          /home
        </Typography>
      </div>
    </ThemeProvider>
  );
}