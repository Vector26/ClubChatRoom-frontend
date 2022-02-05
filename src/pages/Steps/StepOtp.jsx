import { Button, TextField, Typography } from '@mui/material';
import React from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import { Box } from '@mui/system';
export const StepOtp = ({onNext}) => {
  const OD=(e) =>{
    // console.log(e.target.value.length);
    if(e.target.value.length>0)
    {
      e.target.value = e.target.value.toString().slice(0,1);
      console.log(e.target.value);
    }
  }
  return <>
    <Typography variant='h6' align="center">🔒 Enter The Code We Just Texted You</Typography>
    <Box className='otpTF' sx={{display:'flex'}}>
      <TextField className='TF' variant='outlined' onInput = {OD}/>
      <TextField className='TF' variant='outlined' onInput = {OD}/>
      <TextField className='TF' variant='outlined' onInput = {OD}/>
      <TextField className='TF' variant='outlined' onInput = {OD}/>
    </Box>
    <Button variant='filled' id='button' onClick={onNext}>Next <ArrowRightAltIcon/></Button>
  </>;
};
