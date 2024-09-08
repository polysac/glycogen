// src/components/signupform.js
import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Paper } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function SignUpForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      await axios.post('http://localhost:5000/register', { name, email, username, password });
      navigate('/login');
    } catch (err) {
      if (err.response) {
        // Server responded with a status other than 2xx
        setError(err.response.data || 'Error creating account');
      } else if (err.request) {
        // No response received from server
        setError('No response from server');
      } else {
        // Other errors
        setError('Error creating account');
      }
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
        <Paper
            elevation={3}
            sx={{
                padding: '20px',
                textAlign: 'center',
                width: '300px',
            }}
            >
            <Typography variant="h4" gutterBottom>
                Sign Up
            </Typography>
            <form onSubmit={handleSubmit}>
                <Box mb={2}>
                <TextField
                    label="Name"
                    variant="outlined"
                    fullWidth
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                </Box>
                <Box mb={2}>
                <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                </Box>
                <Box mb={2}>
                <TextField
                    label="Username"
                    variant="outlined"
                    fullWidth
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                </Box>
                <Box mb={2}>
                <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                </Box>
                <Box mb={2}>
                <TextField
                    label="Confirm Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                </Box>
                {error && <Typography color="error" style={{paddingBottom:"16px"}} >{error}</Typography>}
                <Button type="submit" variant="contained" color="primary">
                Sign Up
                </Button>
            </form>
        </Paper>
    </div>
  );
}
