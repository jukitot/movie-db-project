import React from 'react';
import MovieCardComponent from "@/app/Components/MovieCardComponent/MovieCardComponent";

import {movieService} from "@/app/services/api.service";


const MoviePage = async  ({ params }: { params: { id: string } }) =>{
const movie = await movieService.getMovieById(Number(params.id))

    return (
        <div>
            <MovieCardComponent movie={movie}/>
            </div>
    );
};

export default MoviePage;