import { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const RegisteredContext = createContext({});

export const RegisteredProvider = ({children}) => {

    const [registeredState, setRegisteredState] = useState([]); 
    const [accessToken, setAccessToken] = useState();
    const [loggedEmail, setLoggedEmail] = useState();
    const navigate = useNavigate();

    useEffect (() => {
        navigate('/');
    }, [accessToken]);

    const onRegisterSubmit = (e, localRegister) => {
        e.preventDefault();
        if (localRegister.password === localRegister.confirmPass)    {
            let exists = false;
            for (let i = 0; i < registeredState.length; i++)    {
                if (localRegister.email === registeredState[i].email)  {                        
                    exists = true;
                }
            }
            if (!exists) {
                fetch('http://localhost:3030/users/register', {
                    method: 'POST',
                    headers: { 
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify ({                                
                        email : localRegister.email,
                        password : localRegister.password
                    })
                })
                .then (data => {
                    return data.json();
                })
                .then (res => {
                    setRegisteredState(state => [...state, {
                        email: res.email,
                        password: res.password,
                        _id: res._id
                    }]);
                    setAccessToken(res.accessToken);
                    setLoggedEmail(res.email);
                })
                .catch(error => console.error('Error:', error))
            }
            else    {
                alert('Existing e-mail address');
            }
        }
        else {
            alert ("Passwords don't match");
        }
    }

    const onLoginSubmit = (e, localLogin) => {
        e.preventDefault();
        for (let i=0; i<registeredState.length; i++) {
            if (registeredState[i].email === localLogin.email) {
                if (registeredState[i].password === localLogin.password) {
                    fetch('http://localhost:3030/users/login', {
                    method: 'POST',
                    headers: { 
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify ({                                
                        email : localLogin.email,
                        password : localLogin.password
                    })
                })
                .then (data => {
                    return data.json();
                })
                .then (res => {
                    setAccessToken (res.accessToken);
                    setLoggedEmail (res.email);
                })
                .catch(error => console.error('Error:', error))
                }
            }
        }
    }

    return (
        <RegisteredContext.Provider value={{
            onRegisterSubmit: onRegisterSubmit,
            onLoginSubmit: onLoginSubmit,
            setAccessToken: setAccessToken,
            accessToken: accessToken,
            setLoggedEmail: setLoggedEmail,
            loggedEmail: loggedEmail
        }}>
            {children}
        </RegisteredContext.Provider>
    );
}