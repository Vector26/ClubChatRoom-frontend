import React from 'react';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import { Button, InputAdornment, Tab, Tabs, TextField, Typography } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Box from '@mui/material/Box';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import {useSelector} from 'react-redux';
export const StepPhoneEmail = ({onNext}) => { 
    const isPhone=useSelector((state)=> state.iR.isPhone);
    const onSubmit=()=>{
        if(isPhone){
            console.log("Phone OTP");
        }
        else{
            console.log("Email OTP");
        }
        onNext();
    }
    // console.log(isPhone);
    return <>
            {isPhone ? <Phone/>:<Email/>}
            <Button variant='filled' id='button' onClick={onSubmit}>Next <ArrowRightAltIcon/></Button>
            <Typography variant="string" align="center">By entering your number, you’re agreeing to our Terms of Service and Privacy Policy. Thanks!</Typography>
    </>;
};

const Email= ()=>{
    return <>
        <Box sx={{display:'flex'}}>
                <EmailIcon sx={{marginRight:'0.5em',color:'#0077FF'}}/> 
                <Typography>Enter Your Email</Typography> 
            </Box>
            <TextField
                className='TF'
                sx={{color:"white"}}
                InputProps={{
                    startAdornment: <InputAdornment position="start"><EmailIcon sx={{color:'white'}}/></InputAdornment>,
                }}
                variant="outlined"
                placeholder='Email'
                onInput = {(e) =>{
                }}
                />
    </>
}

const Phone= ()=>{
    return <>
        <Box sx={{display:'flex'}}>
                <LocalPhoneIcon sx={{marginRight:'0.5em',color:'#0077FF'}}/> 
                <Typography>Enter Your Phone Number</Typography> 
            </Box>
            <TextField
                className='TF'
                sx={{color:"white"}}
                InputProps={{
                    startAdornment: <InputAdornment position="start"><PhoneIphoneIcon sx={{color:'white'}}/></InputAdornment>,
                }}
                variant="outlined"
                placeholder='Phone Number'
                type={'number'}
                onInput = {(e) =>{
                    e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,10)
                }}
                />
    </>
}
