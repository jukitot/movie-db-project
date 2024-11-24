import React from 'react';
import styles from './user.module.css'


const UserComponent = () => {
    return (
        <div className={styles.user}>
            <img alt="user_avatar" src='/breaking_bad_chemisrty_avatar_heisenberg-512.png'/>
            <h2>Anastasiia</h2>
        </div>
    );
};

export default UserComponent;