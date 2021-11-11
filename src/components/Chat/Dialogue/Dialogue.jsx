import dialogueStyles from './Dialogue.module.css';
import {NavLink} from "react-router-dom";

const Dialogue = (props) =>
{
    let path = '/chat/' + props.name;

    return (
        <div className={dialogueStyles.dialogueItem}>
            <NavLink to={path}>
                {props.name}
            </NavLink>
        </div>
    );
}

export default Dialogue;