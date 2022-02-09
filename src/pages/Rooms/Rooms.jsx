import { Box, Button, FormControl, IconButton, InputAdornment, OutlinedInput, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import ChatRoomCard from '../../components/Shared/ChatRoomCard/ChatRoomCard';
import SearchIcon from '@mui/icons-material/Search';
import './Rooms.css'
import CRDB from '../../components/Shared/CreateRoomDialogueBox.jsx/CRDB';
export const Rooms = () => {
    const [open, setopen] = useState(false);
    const data={
        title:"Which Frontend framework is the best",
        speakers:[
            {name:"Hritik Rai",pfp:"https://mui.com/static/images/avatar/1.jpg"},
            {name:"Ananya Mishu",pfp:"https://mui.com/static/images/avatar/1.jpg"},
            {name:"Raghav Tripathi",pfp:"https://mui.com/static/images/avatar/1.jpg"},
            {name:"Ananya Mishu",pfp:"https://mui.com/static/images/avatar/1.jpg"},
        ],
        listeners:45
    }

    const opeN=()=>{
        setopen(true);
    }
    const close=()=>{
        setopen(false);
    }

    return <>
        <Box className="FeedBox">
            <Box className="HeaderBox">
                <Box sx={{display:'flex',flexWrap:'wrap'}}>
                    <Typography variant="h5" sx={{marginRight:'1em',marginBottom:'0.5em'}}>All Voice Rooms</Typography>
                    <TextField
                    id='search'
                    sx={{color:"white !important"}}
                    variant="outlined"
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><IconButton sx={{color:'white'}}><SearchIcon/></IconButton></InputAdornment>,
                    }}
                    />
                </Box>
                <Box sx={{display:'flex',flexWrap:'wrap'}}>
                    <Button onClick={opeN} variant="contained" sx={{backgroundColor:'#20BD5F',borderRadius:'2em',minWidth:'5em'}}>Create Room</Button>
                </Box>
                <CRDB open={open} onClose={close}/>
            </Box>
            <Box className="Feed">
                <ChatRoomCard data={data}/>
                <ChatRoomCard data={data}/>
                <ChatRoomCard data={data}/>
                <ChatRoomCard data={data}/>
                <ChatRoomCard data={data}/>
                <ChatRoomCard data={data}/>
                <ChatRoomCard data={data}/>
                <ChatRoomCard data={data}/>
                <ChatRoomCard data={data}/>
                <ChatRoomCard data={data}/>
                <ChatRoomCard data={data}/>
                <ChatRoomCard data={data}/>
            </Box>
        </Box>
    </>;
};
