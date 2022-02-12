import React from 'react';
// import {useWebRTC} from '../../hooks/usewebRTC';
import { Avatar, Button, Input, Typography } from '@mui/material';
import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux'

export const Room = () => {
    const {id:roomId}=useParams();
    const user=useSelector((state)=>state.iR.user);
    console.log("user",user);
    console.log("roomId",roomId);
    const {clients}=useWebRTC(roomId,user);
  return <div>
      <Typography>All connected Clients</Typography>
      {
          clients.map((client)=>{
              return(
                  <div key={client.id}>
                    <audio control autoplay></audio>
                    <Typography>{client.name}</Typography>
                  </div>
              )
          })
      }
    </div>;
};
