import { Button, InputAdornment, TextField, Typography } from '@mui/material';
import React from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
export const StepUsername = ({onNext}) => {
  return <>
    <Typography variant='h6' align='center'>😎Pick a username</Typography>
    <TextField 
    variant="outlined" className='TF' 
    InputProps={{
      startAdornment: <InputAdornment position="start">@</InputAdornment>,
    }}
    placeholder='Username'/>
    <Typography variant='string' align='center'>Username can be used for the login</Typography>
    <Button variant='filled' id='button' onClick={onNext}>Next <ArrowRightAltIcon/></Button>
  </>;
};
