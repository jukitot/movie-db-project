'use client'
import React, {useState} from 'react';
import styles from './search.module.css'

const SearchComponent = () => {
    const [query, setQuery] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    return (
        <div>
            <form action={'/search'} className={styles.form}>
                <input
                    className={styles.input}
                    type="search"
                    placeholder={'Enter name the movie'}
                    name={'query'}
                    value={query}
                    onChange={handleInputChange}
                />

                <button
                    className={styles.button}
                    type={'submit'}
                    disabled={!query}>Search</button>
            </form>
        </div>
    );
};

export default SearchComponent;