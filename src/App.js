import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import Header from './components/Header';
import Footer from './components/Footer';
import ContactForm from './home/ContactForm';

function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <CssBaseline />
      <Header />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* Main body content goes here */}
        <Typography variant="h4" gutterBottom>
          Welcome to My Health App!
        </Typography>
        <ContactForm />
      </Box>
      <Footer />
    </Box>
  );
}

export default App;