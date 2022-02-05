import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
export const StepVerification = ({onNext}) => {
  return <>
    <Box sx={{ display: 'flex',alignItems:'center',height:'100%',paddingBottom:'6em' }}>
      <CircularProgress />
    <Typography variant='h6' align='center'>Verification In Progress</Typography>
    </Box>
  </>;
};
