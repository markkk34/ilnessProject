import navigationStyles from './Navigation.module.css';
import {NavLink} from "react-router-dom";

const Navigation = () =>
{
    return (
        <div className={navigationStyles.navigation}>
            <div>
                <NavLink to='/profile'>Profile</NavLink>
            </div>
            <div>
                <NavLink to='/chat'>Chat</NavLink>
            </div>
            <div>
                <NavLink to='/news'>News</NavLink>
            </div>
            <div>
                <NavLink to='/music'>Music</NavLink>
            </div>
            <div>
                <NavLink to='/settings'>Settings</NavLink>
            </div>
        </div>
    );
}

export default Navigation;