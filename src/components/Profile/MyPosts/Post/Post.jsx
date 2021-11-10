import postStyles from './Post.module.css';

const Post = (props) =>
{
    return (
        <div className={postStyles.post}>
            {props.message}
        </div>
    );
}

export default Post;