import React from 'react';
import './MsgBox.css';
import Box from '@mui/material/Box';

export const MsgBox = (props) => {
  return <>
        <Box className="cont">
            {props.extra}
            <Box className="banner">
                {props.children}
            </Box>
        </Box>
  </>;
};
