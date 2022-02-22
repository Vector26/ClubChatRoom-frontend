import react, { useEffect, useState } from "react"
import { useCallback } from "react";
import { useRef } from "react";
import {useStateWithCB} from "./useStateWithCB";
import socketInit from '../socket';
import {ACTIONS} from '../RTCActions';

export const useWebRTC=(roomId,user)=>{
    const [clients, setclients] = useStateWithCB([]);
    // console.log(clients);
    const audioElements=useRef({});
    const connections=useRef({});
    const localMediaStream=useRef(null);
    const socket=useRef(null);

    const provideRef=(instance,userId)=>{
        audioElements.current[userId]=instance
    };

    useEffect(() => {
        socket.current=socketInit();
    }, [])

    const addNewClients=useCallback((newClient,cb)=>{
        const looking=clients.find((client)=>client.id===newClient.id);
        if(looking===undefined){
            setclients((existingClients)=>[...existingClients,newClient],cb);
        }
    },[clients,setclients])

    useEffect(()=>{
        const startCapture= async ()=>{
            localMediaStream.current=
                await navigator.mediaDevices.getUserMedia({
                    audio:true
                });
            };
        startCapture()
        .then(()=>{
            addNewClients(user,()=>{
                const localElement=audioElements.current[user.id];
                if(localElement){
                    localElement.volume=0;
                    localElement.srcObject=localMediaStream.current;
                }
                // socket

                socket.current.emit(ACTIONS.JOIN,{roomId,user});
            });
        })
    })
    // console.log(clients);
    return {clients,provideRef};
}