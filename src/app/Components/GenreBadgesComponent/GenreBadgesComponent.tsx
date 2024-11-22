import React, {FC} from 'react';
import {IGenre} from "@/app/models/IGenre";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from './badges.module.css'

type GenreProps = {
    genre: IGenre
}
const GenreBadgesComponent:FC<GenreProps> = ({genre}) => {
    return (
        <div className={styles.genre}>
            <Link href={`/genres/${genre.id}/${genre.name}`}>
                <div className={styles.badge}>
                    <span className='badge badge-secondary' key={genre.id}>{genre.name}
                </span>
                </div>
            </Link>


        </div>
    );
};

export default GenreBadgesComponent;