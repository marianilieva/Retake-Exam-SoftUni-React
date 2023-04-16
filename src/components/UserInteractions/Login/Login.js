import React, { useState, useContext } from 'react';
import { RegisteredContext } from '../contexts/RegisteredContext';
import styles from './Login.module.css';

export default function Login () {
    const [localLogin, setLocalLogin] = useState({
        email: '',
        password: ''
    });

    const { onLoginSubmit } = useContext(RegisteredContext);

    const onLoginChange = (e) => {       
        setLocalLogin(state => ({ ...state, [e.target.name] : e.target.value}));
    }
    
    return (
        <div className={styles['login']}>
            <form onSubmit={(e) => {
                onLoginSubmit(e, localLogin);
                setLocalLogin ({
                    email: '',
                    password: ''
                });
            }}>
                <h2>Log in</h2>
                <label htmlFor='email'>Email</label>
                <input 
                    type='email' 
                    id='email' 
                    name='email'
                    value={localLogin.email} 
                    onChange={onLoginChange}
                />
                <label htmlFor='password'>Password</label>
                <input 
                    type='password' 
                    id='password' 
                    name='password'
                    value={localLogin.password} 
                    onChange={onLoginChange}
                />
                <button type='submit'>Log in</button>
            </form>
        </div>
    );
}