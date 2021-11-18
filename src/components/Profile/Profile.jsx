import profileStyles from './Profile.module.css';
import Account from "./Account/Account";
import Posts from "./MyPosts/Posts";
import PostsContainer from "./MyPosts/PostsContainer";
import SuperChatContainer from "../Chat/ChatContainer";
import SuperPostsContainer from "./MyPosts/PostsContainer";

const Profile = (props) =>
{
    return (
        <div className=''>
            <Account/>
            <SuperPostsContainer/>
        </div>
    );
}

export default Profile;