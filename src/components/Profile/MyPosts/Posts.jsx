import Post from "./Post/Post";

const Posts = () =>
{
    return (
        <div className='account-info'>
            <textarea/>
            <button type={"submit"}>Post</button>
            <Post message = 'This is the first message'/>
            <Post message = 'let me go'/>
        </div>
    );
}

export default Posts;