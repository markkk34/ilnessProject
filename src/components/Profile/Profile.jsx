import profileStyles from './Profile.module.css';
import Account from "./Account/Account";
import Posts from "./MyPosts/Posts";

const Profile = (props) =>
{
    return (
        <div className=''>
            <Account/>
            <Posts
                posts={props.posts}
                addPost={props.addPost}
                newPostText={props.newPostText}
                updateNewPostText={props.updateNewPostText}
                dispatch={props.dispatch}
            />
        </div>
    );
}

export default Profile;