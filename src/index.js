import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux-store/store";
import ReactDOM from "react-dom";
import App from "./App";

let renderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                store={store}
                dispatch={store.dispatch.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderEntireTree(store.getState());

store.subscribe(() => {
    renderEntireTree(store.getState());
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
