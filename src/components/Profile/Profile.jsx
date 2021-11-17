import profileStyles from './Profile.module.css';
import Account from "./Account/Account";
import Posts from "./MyPosts/Posts";
import PostsContainer from "./MyPosts/PostsContainer";

const Profile = (props) =>
{
    return (
        <div className=''>
            <Account/>
            <PostsContainer/>
        </div>
    );
}

export default Profile;