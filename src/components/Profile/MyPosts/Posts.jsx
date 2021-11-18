import Post from "./Post/Post";
import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

const Posts = (props) =>
{
    let text = React.createRef();
    let onAddPost = () =>
    {
        props.onAddPost(text);
    }

    let postElements = props.posts.map(
        (post) => <Post message={post.post}/>
    );

    let onChangeAddPost = () =>
    {
        props.onChangeAddPost(text);
    }

    return (
        <div className='account-info'>
            <textarea ref={text} value={props.newPostText} onChange={onChangeAddPost}/>
            <button type={"submit"} onClick={onAddPost}>Post</button>
            {postElements}
        </div>
    );
}

export default Posts;