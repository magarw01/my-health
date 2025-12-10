import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import api from "../api";

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await api.post("/data", {
        Name: name,
        Email: email,
      });

      console.log("API response:", res.data);
      alert(`Received: ${JSON.stringify(res.data)}`);
    } catch (err) {
      console.error("Error calling API:", err);
    }
  };


  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <Typography variant="h5" gutterBottom>
        Contact Us
      </Typography>
      <TextField
        label="Name"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        label="Email"
        variant="outlined"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
     <Button type="submit">Call API</Button>
    </Box>
  );
}

export default ContactForm;