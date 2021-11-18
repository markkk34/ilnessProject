import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import Posts from "./Posts";
import {connect} from "react-redux";

let mapStateToProps = (state) =>
{
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}

let mapDispatchToProps = (dispatch) =>
{
    return {
        onChangeAddPost: (text) =>
        {
            dispatch(updateNewPostTextActionCreator(text.current.value));
        },
        onAddPost: (text) =>
        {
            dispatch(addPostActionCreator(text.current.value));
        },
    }
}

const SuperPostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default SuperPostsContainer;
