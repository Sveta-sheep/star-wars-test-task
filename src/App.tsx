import { Box, SxProps, Typography } from '@mui/material';
import React from 'react';

const sx: SxProps = {
  backgroundColor: '#282c34',
  minHeight: '100vh',
};

function App() {
  return (
    <Box sx={sx}>
      <Typography color='white'>Setup</Typography>
    </Box>
  );
}

export default App;
