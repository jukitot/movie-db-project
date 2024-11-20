import React, {FC} from 'react';
import {IMovie} from "@/app/models/IMovie";
type PosterProps = {
    movie : IMovie
}
const MoviePosterComponent:FC<PosterProps> = async({movie}) => {
    return (
        <div>
            <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt=""/>
        </div>
    );
};

export default MoviePosterComponent;