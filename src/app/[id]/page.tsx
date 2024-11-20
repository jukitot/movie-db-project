import React from 'react';
import MovieCardComponent from "@/app/Components/MovieCardComponent/MovieCardComponent";

import {movieService} from "@/app/services/api.service";
import MovieInfoComponent from "@/app/Components/MovieInfoComponent/MovieInfoComponent";


type MoviePageParams = {
    id: string
}
const MoviePage = async  ({ params }: { params: MoviePageParams }) =>{
const movie = await movieService.getMovieById(Number(params.id))

    return (
        <div>
            <MovieCardComponent movie={movie}/>
            <MovieInfoComponent movie={movie}/>
            </div>
    );
};

export default MoviePage;