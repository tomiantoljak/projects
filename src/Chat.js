import React from "react";
import "./Chat.css";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

function Chat({ name, message, profilePic, timePassed }) {
    return (
        <Link to={`/chat/${name}`}>
            <div className="chat">
                <Avatar className="chat-image" alt={name} src={profilePic}/>
                <div className="chat-details">
                    <h2>{name}</h2>
                    <p>{message}</p>
                </div>
                <p className="passed-time">{timePassed}</p>
            </div>
        </Link>
    )
}

export default Chat;