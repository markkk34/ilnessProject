import profileStyles from './Profile.module.css';
import Account from "./Account/Account";
import Posts from "./MyPosts/Posts";

const Profile = () =>
{
    return (
        <div className=''>
            <Account/>
            <Posts/>
        </div>
    );
}

export default Profile;