import { Button, TextField, Typography } from '@mui/material';
import React from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
export const StepName = ({onNext}) => {
  return <>
    <Typography variant='h6' align='center'>🤓What's your fullname?</Typography>
    <TextField variant="outlined" className='TF' placeholder='Your Name'/>
    <Typography variant='string' align='center'>People use real names<br/> at codershouse :) </Typography>
    <Button variant='filled' id='button' onClick={onNext}>Next <ArrowRightAltIcon/></Button>
  </>;
};
