import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux-store/store";
import ReactDOM from "react-dom";
import App from "./App";
import StoreContext, {Provider} from "./StoreContext";

let renderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App/>
            </Provider>
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
