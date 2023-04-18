import { useState, useContext } from 'react';
import { RegisteredContext } from '../../../UserInteractions/contexts/RegisteredContext';
import styles from './UserActions.module.css';

export default function UserActions ({setComment}) {
    const {loggedEmail} = useContext(RegisteredContext);

    const [add, setAdd] = useState ({
        author: `${loggedEmail}`,
        add: ''
    });

    const onAddChange = (e) => {
        setAdd(state => ({ ...state, [e.target.name] : e.target.value}));
    }

    const onAddSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3030/jsonstore/comments', {
                    method: 'POST',
                    headers: { 
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify ({                                
                        add
                    })
                })
                .then (data => {
                    return data.json();
                })
                .then (res => {
                    setComment(state => [...state, {
                        author: `${loggedEmail}`,
                        add: `${add.add}`
                    }]);
                    setAdd ({
                        author: `${loggedEmail}`,
                        comment: ''
                    });
                })
                .catch(error => console.error('Error:', error))
    }

    return (
        <div className={styles['userActions']}>
            <form onSubmit={onAddSubmit}>
                <input 
                    type='text' 
                    id='add' 
                    name='add'
                    value={add.comment} 
                    onChange={onAddChange}
                />
                <button type='submit'>Add comment</button>
            </form>
        </div>
    );
}