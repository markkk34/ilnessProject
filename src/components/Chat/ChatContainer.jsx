import React from "react";
import {addMessageActionCreator, updateMessageActionCreator} from "../../redux/chat-reducer";
import Chat from "./Chat";
import {connect} from "react-redux";

let mapStateToProps = (state) =>
{
    return {
        newMessageText: state.chatPage.newMessageText,
        messages: state.chatPage.messages,
        names: state.profilePage.names,
    };
}

let mapDispatchToProps = (dispatch) =>
{
    return {
        onUpdateMessage: (message) =>
        {
            dispatch(updateMessageActionCreator(message.current.value));
        },
        addMessage: (message) => {
            dispatch(addMessageActionCreator(message.current.value));
        },
    };
}

const SuperChatContainer = connect(mapStateToProps, mapDispatchToProps)(Chat);

export default SuperChatContainer;
