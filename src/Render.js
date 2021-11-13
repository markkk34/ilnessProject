import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import data, {addPost, updateNewPostText} from "./redux/State";

const renderEntireTree = (data) => {
    ReactDOM.render(
        <React.StrictMode>
            <App data={data} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

export default renderEntireTree;