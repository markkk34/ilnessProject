import Dialogue from "./Dialogue/Dialogue";
import Messages from "../Chat/Messages/Messages";
import chatStyles from "./Chat.module.css"
import {Route, Routes} from "react-router-dom";
import React from "react";
import {addMessageActionCreator, updateMessageActionCreator} from "../../redux/chat-reducer";
import Chat from "./Chat";
import StoreContext from "../../StoreContext";

const ChatContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let onUpdateMessage = (message) =>
                {
                    store.dispatch(updateMessageActionCreator(message.current.value));
                }

                let addMessage = (message) =>
                {
                    store.dispatch(addMessageActionCreator(message.current.value));
                }
                return (<Chat
                    onUpdateMessage={onUpdateMessage}
                    addMessage={addMessage}
                    newMessageText={store.getState().chatPage.newMessageText}
                    messages={store.getState().chatPage.messages}
                    names={store.getState().profilePage.names}
                />)
            }}
        </StoreContext.Consumer>
    );
}

export default ChatContainer;
