import Dialogue from "./Dialogue/Dialogue";
import Messages from "../Chat/Messages/Messages";
import chatStyles from "./Chat.module.css"
import {Route, Routes} from "react-router-dom";
import React from "react";
import {addMessageActionCreator, updateMessageActionCreator} from "../../redux/chat-reducer";
import Chat from "./Chat";

const ChatContainer = (props) => {
    let onUpdateMessage = (message) =>
    {
        props.store.dispatch(updateMessageActionCreator(message.current.value));
    }

    let addMessage = (message) =>
    {
        props.store.dispatch(addMessageActionCreator(message.current.value));
    }

    return (
        <Chat
            onUpdateMessage={onUpdateMessage}
            addMessage={addMessage}
            newMessageText={props.store.getState().chatPage.newMessageText}
            messages={props.store.getState().chatPage.messages}
            names={props.store.getState().profilePage.names}
        />
    );
}

export default ChatContainer;
