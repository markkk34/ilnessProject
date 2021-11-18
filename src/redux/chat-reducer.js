const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';

let messages = [
    {message: 'message 1'},
    {message: 'message 2'},
    {message: 'message 3'},
];

let initialState = {
    messages: messages,
    newMessageText: 'mario',
};

const chatReducer = (state = initialState, action) =>
{
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {message: action.message},],
            };

        case UPDATE_MESSAGE:
            return {
                ...state,
                newMessageText: action.message,
            };

        default:
            return state;
    }
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
