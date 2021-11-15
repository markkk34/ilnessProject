import profileReducer from "./profile-reducer";
import chatReducer from "./chat-reducer";

let names = [
    {name: 'Mark', id: 1},
    {name: 'Kolya', id: 2},
    {name: 'Vitality', id: 3},
];
let messages = [
    {message: 'message 1'},
    {message: 'message 2'},
    {message: 'message 3'},
];
let posts = [
    {post: 'This is the first message', id: 1},
    {post: 'let me go', id: 2},
]

let store = {
    _data: {
        profilePage: {
            names: names,
            posts: posts,
            newPostText: 'kamario',
        },
        chatPage: {
            messages: messages,
            newMessageText: 'mario',
        },
    },
    _callSubscriber() {
        console.log('Kamario');
    },
    getData() {
        return this._data;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {

        this._data.profilePage = profileReducer(this._data.profilePage, action);
        this._data.chatPage = chatReducer(this._data.chatPage, action);

        this._callSubscriber(this._data);
    }
}

export default store;
