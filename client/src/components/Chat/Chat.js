// import React from 'react';

import React, {useState, useEffect} from 'react';
import querystring from "query-string";
import io from "socket.io-client";
import "./Chat.scss";

let socket;

const Chat = ({location}) => {
      const [name, setName] = useState("");
      const [room, setRoom] = useState("");
      
const ENDPOINT = "localhost:5000";
    useEffect(()=>{
        const {name, room} = querystring.parse(location.search);
        
        socket=io(ENDPOINT);
        
        setName(name);
        setRoom(room);
        
        socket.emit("join",{name,room},()=>{
            
        });
        return()=>{
            socket.emit("disconnect");
            socket.off()
        }
        
        
    },[ENDPOINT,location.search])
    return (<div>
       <h1>CHAT</h1>
    </div>);
}
 
export default Chat;