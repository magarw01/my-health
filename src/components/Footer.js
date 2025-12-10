import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Footer() {
  return (
    <Box sx={{ p: 2, mt: 'auto', backgroundColor: 'primary.main', color: 'white' }}>
      <Typography variant="body2" align="center">
        © {new Date().getFullYear()} My App. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;