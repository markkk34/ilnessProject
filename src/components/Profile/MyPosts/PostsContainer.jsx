import Post from "./Post/Post";
import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import Posts from "./Posts";

const PostsContainer = (props) =>
{
    let addPost = (text) =>
    {
        props.store.dispatch(addPostActionCreator(text.current.value));
    }

    let onChangeAddPost = (text) =>
    {
        props.store.dispatch(updateNewPostTextActionCreator(text.current.value));
    }

    return (
        <Posts
            onChangeAddPost={onChangeAddPost}
            onAddPost={addPost}
            posts={props.store.getState().profilePage.posts}
            newPostText={props.store.getState().profilePage.newPostText}
        />
    );
}

export default PostsContainer;
