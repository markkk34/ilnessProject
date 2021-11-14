import Post from "./Post/Post";
import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/State";

const Posts = (props) =>
{
    let text = React.createRef();
    let addPost = () =>
    {
        //props.addPost({post: text.current.value});
        props.dispatch(addPostActionCreator(text.current.value));
    }

    let postElements = props.posts.map(
        (post) => <Post message={post.post}/>
    );

    let onChangeAddPost = () =>
    {
        //props.updateNewPostText(text.current.value);
        props.dispatch(updateNewPostTextActionCreator(text.current.value));
    }

    return (
        <div className='account-info'>
            <textarea ref={text} value={props.newPostText} onChange={onChangeAddPost}/>
            <button type={"submit"} onClick={addPost}>Post</button>
            {postElements}
        </div>
    );
}

export default Posts;