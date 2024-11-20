import React, {FC} from 'react';
import {IMovie} from "@/app/models/IMovie";
import styles from './info.module.css'

type MovieInfoProps = {
    movie: IMovie}

const MovieInfoComponent:FC<MovieInfoProps> = ({movie}) => {
    return (
        <div className={styles.textColor}>
            <h1> <div>Release Date: {movie.release_date}</div></h1>
            <h2>Overview: {movie.overview}</h2>
        </div>
    );
};

export default MovieInfoComponent;