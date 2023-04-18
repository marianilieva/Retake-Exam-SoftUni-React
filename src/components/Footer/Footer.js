import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export default function Footer () {
    return (
        <div className={styles['footerContainer']}>
            <div className={styles['footerMenu']}>
                <Link to="/register">Register</Link>
                <Link to="/login">Log in</Link>
            </div>
            <div className={styles['footer']}>
                Copyrights &copy; of the app and all of its features (including 
                text) belong to Maria Nikitova Ilieva, 03.04.2023
            </div>
        </div>
    );
}