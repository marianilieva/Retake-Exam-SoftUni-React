import { Link } from "react-router-dom";
import styles from './Menu.module.css';

export default function Menu () {
    return(
        <nav className={styles['menu']}>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/physical">Physical</Link></li>
                <li><Link to="/mind">Mind</Link></li>
                <li><Link to="/geographical">Geographical</Link></li>
                <li><Link to="/social">Social</Link></li>
                <li><Link to="/interests">Interests</Link></li>
                <li><Link to="/login">Log in</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/logout">Log out</Link></li>
            </ul>
        </nav>
    );
}