const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
            messages,
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
    addPost(post) {
        let temp = {
            post: post.post, id: 3
        };

        this._data.profilePage.posts.push(temp);
        this._callSubscriber(this._data);
    },
    updateNewPostText(newText) {
        this._data.profilePage.newPostText = newText;
        this._callSubscriber(this._data);
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            console.log(action.post);
            this.addPost(action);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this.updateNewPostText(action.text);
        }
    }
}

export const addPostActionCreator = (text) => {
    return {
        type: ADD_POST,
        post: text,
    };
}

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    text: text,
})

export default store;