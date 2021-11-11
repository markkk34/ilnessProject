import Dialogue from "./Dialogue/Dialogue";
import Messages from "../Chat/Messages/Messages";
import chatStyles from "./Chat.module.css"
import {Route, Routes} from "react-router-dom";

const Chat = () => {
    return (
        <div className={chatStyles.chat}>
            <div className={chatStyles.dialogues}>
                <Dialogue name='Mark' id='1'/>
                <Dialogue name='Kolya' id='2'/>
                <Dialogue name='Vitality' id='3'/>
            </div>
            <div className={chatStyles.messages}>
                <Routes>
                    <Route path='/Mark' element={<Messages/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default Chat;