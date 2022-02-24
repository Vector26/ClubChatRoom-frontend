import React, { useEffect, useRef } from 'react';
import {useWebRTC} from '../../hooks/usewebRTC';
import { Avatar, Button, Input, Typography } from '@mui/material';
import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux'

export const Room = () => {
    const {id:roomId}=useParams();
    const user=useSelector((state)=>state.iR.user);
    user.profile=useSelector((state)=>state.Profile);
    let {clients,provideRef}=useWebRTC(roomId,user);
    console.log(clients);
    

  return <div>
      <Typography>All connected Clients</Typography>
      {
          clients.map((client)=>{
              return(
                  <div key={client.id}>
                    <audio controls autoPlay ref={(instance)=>{provideRef(instance,client.id)}}></audio>
                    <Typography>{client.name}</Typography>
                  </div>
              )
          })
      }
    </div>;
};

// ref={(instance)=>{provideRef(instance,client.id)}}