const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';

const chatReducer = (state, action) =>
{
    switch (action.type) {
        case ADD_MESSAGE:
            state.messages.push({message: action.message});
            break;

        case UPDATE_MESSAGE:
            state.newMessageText = action.message;
            break;

        default:
            return state;
    }

    return state;
}

export default chatReducer;

export const addMessageActionCreator = (message) => ({
    type: ADD_MESSAGE,
    message: message,
})

export const updateMessageActionCreator = (message) => ({
    type: UPDATE_MESSAGE,
    message: message,
})
