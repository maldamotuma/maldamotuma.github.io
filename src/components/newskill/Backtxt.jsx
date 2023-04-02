import { Typography } from '@mui/material';
import React from 'react';

const Backtxt = () => {
  return (
      <Typography variant="h2" component="h2" fontWeight="bold" fontFamily="Roboto" fontSize={{xl: 300, lg: 250, xs: '5em', md: 150}} sx={{
          position: 'absolute',
          top: {md: -30},
          left: 0,
          opacity: {md: .05, xs: .08},
          zIndex: 1,
          color: "#ffffff"
      }}>
          Skills
      </Typography>
  );
};

export default Backtxt;
