import React, {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { RegisteredContext } from '../contexts/RegisteredContext';
import styles from './Logout.module.css';

export default function Logout () {
    const {setAccessToken, setLoggedEmail} = useContext(RegisteredContext);
    const navigate = useNavigate();

    const onBack = () => {
        navigate('/');
    }

    const onLogout = () => {
        setAccessToken('');
        setLoggedEmail('');
        navigate('/');
    }

    return (
        <div className={styles['logout']}>
            <form>
                <h3>Are you sure you want to log out?</h3>
                <div>
                    <button type='button' onClick={onLogout}>Yes</button>
                    <button type='button' onClick={onBack}>No</button>
                </div>
            </form>
        </div>
    );
}