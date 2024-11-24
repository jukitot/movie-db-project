import React from 'react';
import MovieCardComponent from "@/app/Components/MovieCardComponent/MovieCardComponent";

import {movieService} from "@/app/services/api.service";
import MovieInfoComponent from "@/app/Components/MovieInfoComponent/MovieInfoComponent";

import "bootstrap/dist/css/bootstrap.min.css";

type MoviePageParams = {
    id: string
}
const MoviePage = async ({params}: { params: MoviePageParams }) => {
    const movie = await movieService.getMovieById(Number(params.id))

    return (
        <div>
            <MovieCardComponent key={movie?.id} movie={movie}/>
            <MovieInfoComponent key={movie?.id} movie={movie}/>
        </div>
    );
};

export default MoviePage;