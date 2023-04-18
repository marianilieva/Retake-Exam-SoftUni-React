import { Link } from "react-router-dom";
import styles from './Menu.module.css';
import { useContext } from "react";
import { RegisteredContext } from "../UserInteractions/contexts/RegisteredContext";

export default function Menu () {
    const {accessToken, loggedEmail} = useContext(RegisteredContext);

    return(
        <nav className={styles['menu']}>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/physical">Physical</Link></li>
                <li><Link to="/mind">Mind</Link></li>
                <li><Link to="/geographical">Geographical</Link></li>
                <li><Link to="/social">Social</Link></li>
                <li><Link to="/interests">Interests</Link></li>
                {!accessToken
                ? <>
                    <li><Link to="/login">Log in</Link></li>
                    <li><Link to="/register">Register</Link></li>
                </>
                : <>
                    <h3>{`Hello, ${loggedEmail}`}</h3>
                    <li><Link to="/logout">Log out</Link></li>
                </>
                }
            </ul>
        </nav>
    );
}