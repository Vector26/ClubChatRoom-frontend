import react, { useEffect, useState } from "react"
import { useCallback } from "react";
import { useRef } from "react";
import {useStateWithCB} from "./useStateWithCB";

const users=[
    {
        id:1,
        name:'Hritik Rai'
    },
    {
        id:2,
        name:'Rashmi Rai'
    },
];
export const useWebRTC=()=>{
    const [clients, setclients] = useStateWithCB(users);
    const audioElements=useRef({});
    const connections=useRef({});
    const localMediaStream=useRef(null);

    const provideRef=(instance,userId)=>{
        audioElements.current[userId]=instance
    };

    const addNewClients=useCallback((newClient,cb)=>{
        const looking=clients.find((client)=>{client.id===newClient.id});
        if(looking===undefined){
            setclients((existingClients)=>[...existingClients,newClient],cb);
        }
    },[clients,setclients])

    useEffect(()=>{
        const startCapture= async()=>{
            localMediaStream.current=
                await navigator.mediaDevices.getUserMedia({
                    audio:true
                })
            }

    })
    return clients;
}