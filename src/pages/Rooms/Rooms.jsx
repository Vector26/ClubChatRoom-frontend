import { Box, FormControl, IconButton, InputAdornment, OutlinedInput, TextField, Typography } from '@mui/material';
import React from 'react';
import ChatRoomCard from '../../components/Shared/ChatRoomCard/ChatRoomCard';
import SearchIcon from '@mui/icons-material/Search';
import './Rooms.css'
export const Rooms = () => {
    const data={
        title:"Which Frontend framework is the best",
        speakers:[
            {name:"Hritik Rai",pfp:"https://mui.com/static/images/avatar/1.jpg"},
            {name:"Ananya Mishu",pfp:"https://mui.com/static/images/avatar/1.jpg"},
            {name:"Raghav Tripathi",pfp:"https://mui.com/static/images/avatar/1.jpg"},
        ],
        listeners:45
    }
    return <>
        <Box className="FeedBox">
            <Box className="HeaderBox">
                <Box sx={{display:'flex'}}>
                    <Typography variant="h5">All Voice Rooms</Typography>
                    <TextField
                    id='search'
                    startAdornment={
                        <InputAdornment position="start">
                            <IconButton>
                                <SearchIcon /> 
                            </IconButton>
                        </InputAdornment>
                    }
                    />
                </Box>
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
