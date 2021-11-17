import Post from "./Post/Post";
import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import Posts from "./Posts";
import StoreContext from "../../../StoreContext";

const PostsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let addPost = (text) => {
                    store.dispatch(addPostActionCreator(text.current.value));
                }

                let onChangeAddPost = (text) => {
                    store.dispatch(updateNewPostTextActionCreator(text.current.value));
                }
                return (<Posts
                    onChangeAddPost={onChangeAddPost}
                    onAddPost={addPost}
                    posts={store.getState().profilePage.posts}
                    newPostText={store.getState().profilePage.newPostText}
                />)
            }}
        </StoreContext.Consumer>
    );
}

export default PostsContainer;
