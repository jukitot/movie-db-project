import React, {FC} from 'react';
import {IMovie} from "@/app/models/IMovie";
import MoviePosterComponent from "@/app/Components/MoviePosterComponent/MoviePosterComponent";
import MovieStarRating from "@/app/Components/MovieStarRating/MovieStarRating";
import styles from './movieCard.module.css'


type MovieCardProps = {
    movie: IMovie;

}

const MovieCardComponent:FC<MovieCardProps> = async( {movie}) => {
    return (
        <div className={styles.cardFlex}>

            <h3>{movie.title}</h3>
            <MovieStarRating rating={movie.vote_average/2} maxRating={5}/>
            <MoviePosterComponent movie={movie}/>



        </div>
    );
};

export default MovieCardComponent;