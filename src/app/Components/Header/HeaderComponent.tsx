import React from 'react';
import Link from "next/link";
import SearchComponent from "@/app/Components/Search/SearchComponent";
import UserComponent from "@/app/Components/UserComponent/UserComponent";
import styles from './header.module.css'
import ThemeSwitcherComponent from "@/app/Components/ThemeSwitcherComponent/ThemeSwitcherComponent";
const HeaderComponent = () => {
    return (
        <div className={styles.header}>
            <ul>
                <Link className={styles.logo} href={'/'}>
                    <li> MOVIE DB</li>
                </Link>
                <SearchComponent/>
                <UserComponent/>
                <ThemeSwitcherComponent/>
            </ul>
        </div>
    );
};

export default HeaderComponent;