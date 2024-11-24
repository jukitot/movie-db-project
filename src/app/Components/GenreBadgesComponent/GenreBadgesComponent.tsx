import React, {FC} from 'react';
import {IGenre} from "@/app/models/IGenre";
import Link from "next/link";
import styles from './badges.module.css'

type GenreProps = {
    genre: IGenre
}

const GenreBadgesComponent: FC<GenreProps> = ({genre}) => {
    return (
        <div className={styles.genre}>
            <Link href={`/genres/${genre.id}/${genre.name}`}>
                <p className={styles.badge}>
                    <span className='badge' key={genre.id}>{genre.name}
                </span>
                </p>
            </Link>
        </div>
    );
};

export default GenreBadgesComponent;