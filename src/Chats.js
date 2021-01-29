import React from "react";
import Chat from "./Chat"

function Chats(){
    return (
        <div className="chats">
            <Chat 
            name="Tomi"
            message="How are you"
            profilePic="https://images.unsplash.com/photo-1592023031338-ee30ef94abbc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Z3V5c3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            timePassed="40 minutes ago"
            />
            <Chat 
            name="Theo"
            message="How are you"
            profilePic="https://images.unsplash.com/photo-1521341057461-6eb5f40b07ab?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3V5c3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            timePassed="45 minutes ago"
            />
            <Chat 
            name="Taren"
            message="How are you"
            profilePic="https://images.unsplash.com/photo-1584799235813-aaf50775698c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8Z3V5c3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            timePassed="55 minutes ago"
            />
            <Chat 
            name="Roni"
            message="How are you"
            profilePic="https://images.unsplash.com/photo-1484515991647-c5760fcecfc7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8Z3V5c3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            timePassed="85 minutes ago"
            />
        </div>
    )
}

export default Chats;