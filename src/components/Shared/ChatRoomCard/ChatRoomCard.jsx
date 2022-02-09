import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import Typography from '@mui/material/Typography';
import { Avatar, AvatarGroup } from '@mui/material';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import './ChatRoomCard.css'

export default function ChatRoomCard({data}) {
  return (
    <Card className="card">
      <CardContent className='cC'>
        <Typography variant="h6" align="left">
        {data.title}
        </Typography>
        <Box sx={{display:'flex',padding:'1.5em'}}>
            <AvatarGroup max={3} spacing='small'>
                {data.speakers.map((speaker)=>{
                    return (<Avatar alt={speaker.name} src={speaker.pfp} />)
                })}
            </AvatarGroup>
        <Box className="speakers">
            {data.speakers.map((speaker)=>{
                    return (
                    <Box className="speakersContainer">
                        <Typography variant="subtitle" align="left" gutterBottom>
                            {speaker.name}
                        </Typography>
                        <ChatBubbleIcon/>
                    </Box>
                    )
                })}
        </Box>
        </Box>
      </CardContent>
      <CardActions sx={{justifyContent:'space-between'}}>
        <Button>Join Room</Button>
        <Box sx={{display:'flex',backgroundColor:'rgb(100,100,100)',padding:'0.75em',borderRadius:'1em'}}>
            <Typography variant="subtitle" align="left" style={{ fontSize: 10 }}>
                {data.listeners}
            </Typography>
            <PermIdentityIcon style={{ fontSize: 10 }}/>
        </Box>
        </CardActions>
    </Card>
  );
}
