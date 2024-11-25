import React, {FC} from 'react';
import {IMovie} from "@/app/models/IMovie";
import styles from './poster.module.css'

type PosterProps = {
    movie: IMovie
}
const MoviePosterComponent: FC<PosterProps> = async ({movie}) => {
    const defaultImage = 'https://img.freepik.com/premium-vector/no-photo-available-vector-icon-default-image-symbol-picture-coming-soon-web-site-mobile-app_87543-18055.jpg'
    return (
        <div>
            <img className={styles.img}
                 src={movie.backdrop_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : defaultImage}
                 alt={movie.title}/>
        </div>
    );
};

export default MoviePosterComponent;