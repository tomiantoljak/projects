import React, { useState } from "react";
import "./ChatScreen.css";
import Avatar from "@material-ui/core/Avatar";


function ChatScreen(){
    const [ input, setInput ] = useState([])
    const [ messages, setMessages ] = useState([
        {
            name: "Theo",
            image: "https://images.unsplash.com/photo-1521341057461-6eb5f40b07ab?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3V5c3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            message: "Message number one"
        },
        {
            name: "Theo",
            image: "https://images.unsplash.com/photo-1521341057461-6eb5f40b07ab?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3V5c3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            message: "Message number two"
        },
        {
            message: "Message number three"
        }
    ])

    const handleSend = (e) => {
        e.preventDefault();
        setMessages([...messages, { message: input }]);
        setInput("");
    };

    return(
        <div className="chat-screen">
            <p className="chat-matched-message">You matched with him on 4th</p>
            {messages.map(message => 
            message.name ? (
                <div className="chat-message">
                    <Avatar 
                    className="chat-image"
                    alt={message.name}
                    src={message.image}
                    />
                    <p className="chat-text">{message.message}</p>
                </div>
            ) :
               (
                <div className="chat-message">
                    <p className="chat-text-from-us">{message.message}</p>
                </div>
               ) 
            )}
            <form className="chat-form">
                <input
                onChange={e => setInput(e.target.value)}
                value={input} 
                type="text"
                placeholder="Type a message..."
                className="chat-input"
                />
                <button 
                onClick={handleSend}
                className="chat-button">SEND</button>
            </form>
        </div>
    )
}

export default ChatScreen;