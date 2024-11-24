import React from 'react';
import styles from './search.module.css'

const SearchComponent = () => {
    return (
        <div>
            <form action={'/search'} className={styles.form}>
                <input className={styles.input} type="search" placeholder={'Enter name the movie'} name={'query'}/>
                <button className={styles.button} type={'submit'}>Search</button>
            </form>
        </div>
    );
};

export default SearchComponent;