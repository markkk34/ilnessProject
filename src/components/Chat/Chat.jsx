import Dialogue from "./Dialogue/Dialogue";
import Messages from "../Chat/Messages/Messages";
import chatStyles from "./Chat.module.css"
import {Route, Routes} from "react-router-dom";
import React from "react";
import {addMessageActionCreator, updateMessageActionCreator} from "../../redux/chat-reducer";

const Chat = (props) => {
    let dialogueElements = props.names.map(
        dialogue => <Dialogue name={dialogue.name} id={dialogue.id}/>
    );

    let message = React.createRef();

    let onUpdateMessage = () =>
    {
        props.onUpdateMessage(message);
    }

    let addMessage = () =>
    {
        props.addMessage(message);
    }

    return (
        <div className={chatStyles.chat}>
            <div>
                <textarea
                    ref={message}
                    onChange={onUpdateMessage}
                    value={props.newMessageText}
                />
                <button type={"submit"} onClick={addMessage}>send mssg</button>
            </div>
            <div className={chatStyles.dialogues}>
                {dialogueElements}
            </div>
            <div className={chatStyles.messages}>
                <Routes>
                    <Route path='/Mark' element={<Messages messages={props.messages}/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default Chat;
