import React, {FC} from 'react';
import {IMovie} from "@/app/models/IMovie";
import MoviePosterComponent from "@/app/Components/MoviePosterComponent/MoviePosterComponent";
import MovieStarRating from "@/app/Components/MovieStarRating/MovieStarRating";
import styles from './movieCard.module.css'
import {movieService} from "@/app/services/api.service";

import GenreBadgesComponent from "@/app/Components/GenreBadgesComponent/GenreBadgesComponent";
import "bootstrap/dist/css/bootstrap.min.css";

type MovieCardProps = {
    movie: IMovie;
}

const MovieCardComponent: FC<MovieCardProps> = async ({movie}) => {

    const allGenres = await movieService.getGenres()
    const movieGenres = Array.isArray(movie?.genre_ids)
        ? allGenres.filter((genre) => movie.genre_ids.includes(genre.id))
        : [];

    return (
        <div className={styles.cardFlex}>
            <MoviePosterComponent movie={movie}/>
            <MovieStarRating rating={movie.vote_average / 2} maxRating={5}/>
            <h3>{movie.title}</h3>
            <div className={styles.genre}>
                {movieGenres.map((genre) => (<GenreBadgesComponent genre={genre} key={genre.id}/>
                ))}
            </div>
        </div>
    );
};

export default MovieCardComponent;