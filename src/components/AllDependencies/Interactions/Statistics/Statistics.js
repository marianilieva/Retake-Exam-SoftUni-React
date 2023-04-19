import { useContext } from 'react';
import styles from './Statistics.module.css';

export default function Statistics ({comments}) {
    
    return (
        <div className={styles['statistics']}>
            { comments }
        </div>
    );
}