const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let names = [
    {name: 'Mark', id: 1},
    {name: 'Kolya', id: 2},
    {name: 'Vitality', id: 3},
];
let posts = [
    {post: 'This is the first message', id: 1},
    {post: 'let me go', id: 2},
]

let initialState = {
    names: names,
    posts: posts,
    newPostText: 'kamario',
};

const profileReducer = (state = initialState, action) =>
{
    switch (action.type) {
        case ADD_POST:
            let temp = {
                post: action.post, id: 3
            };
            return {
                ...state,
                posts: [...state.posts, temp,],
            };

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.text,
            }

        default:
            return state;
    }
}

export default profileReducer;


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
