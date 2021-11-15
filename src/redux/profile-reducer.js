const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) =>
{
    switch (action.type) {
        case ADD_POST:
            let temp = {
                post: action.post, id: 3
            };

            state.posts.push(temp);
            break;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.text;
            break;

        default:
            return state;
    }

    return state;
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
