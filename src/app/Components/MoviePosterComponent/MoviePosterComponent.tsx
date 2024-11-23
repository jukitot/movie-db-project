import React, {FC} from 'react';
import {IMovie} from "@/app/models/IMovie";
type PosterProps = {
    movie : IMovie
}
const MoviePosterComponent:FC<PosterProps> = async({movie}) => {
    const defaultImage = 'https://img.freepik.com/premium-vector/no-photo-available-vector-icon-default-image-symbol-picture-coming-soon-web-site-mobile-app_87543-18055.jpg'
    return (
        <div>
            <img src={ movie.backdrop_path ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}` : defaultImage} alt=""/>
        </div>
    );
};

export default MoviePosterComponent;