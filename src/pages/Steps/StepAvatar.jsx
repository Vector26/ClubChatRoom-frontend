import { Avatar, Button, Typography } from '@mui/material';
import React from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
export const StepAvatar = ({onNext}) => {
  return <>
    <Typography variant='h6' align='center'>🙉Okay,Hritik Rai!</Typography>
    <Typography variant='string' align='center'>How's this photo</Typography>
    <Box sx={{display:'flex',justifyContent:'center',width:'100%'}}>
      <Avatar alt="Remy Sharp" src="" sx={{height:'4em',width:'4em',border:'#0077FF solid 0.2em'}} />
    </Box>
    <Link><Typography variant="string" sx={{color:'#0077FF'}}>Choose a different Photo</Typography></Link>
    <Button variant='filled' id='button' onClick={onNext}>Next <ArrowRightAltIcon/></Button>
  </>;
};
