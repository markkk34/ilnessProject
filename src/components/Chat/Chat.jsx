import Dialogue from "./Dialogue/Dialogue";
import Messages from "../Chat/Messages/Messages";
import chatStyles from "./Chat.module.css"
import {Route, Routes} from "react-router-dom";

const Chat = (props) => {
    let dialogueElements = props.names.map(
        dialogue => <Dialogue name={dialogue.name} id={dialogue.id}/>
    );

    return (
        <div className={chatStyles.chat}>
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