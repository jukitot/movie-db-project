import React, {FC} from 'react';
import {movieService} from "@/app/services/api.service";
import Link from "next/link";
import styles from './genres.module.css'


const GenresComponent=  async () => {
    const genres = await movieService.getGenres()

    return (
        <div>

            <ul className={styles.listColor}>
                {genres.map((genre) =>
                    <Link className={styles.aHref} href={`/genres/${genre.id}/${genre.name}`} key={genre.id}>
                        <li>{genre.name}</li>
                    </Link>
                )}
            </ul>
        </div>
    );
};

export default GenresComponent;