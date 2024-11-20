import React, {FC} from 'react';
import {IMovie} from "@/app/models/IMovie";


type MovieCardProps = {
    movie: IMovie
}

const MovieCardComponent:FC<MovieCardProps> = async( {movie}) => {
    return (
        <div>
            <h1>{movie.title}</h1>
            <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt=""/>
        </div>
    );
};

export default MovieCardComponent;