import React from 'react';
import {movieService} from "@/app/services/api.service";
import MovieCardComponent from "@/app/Components/MovieCardComponent/MovieCardComponent";
import Link from "next/link";
import PaginationComponent from "@/app/Components/pagination/PaginationComponent";
import MoviesComponent from "@/app/Components/MoviesComponent/MoviesComponent";
type Params = {
    genreId: string,
    name: string,
    currentPage: string
}
const GenrePage = async({params, searchParams}:{params:Params; searchParams: { page?: string }}) => {


    const genreId = parseInt(params.genreId, 10)
    const currentPage = parseInt(searchParams.page || "1", 10)

    const {results, total_pages} = await movieService.getMovieByGenre(genreId, currentPage)
    console.log(results);
    console.log(total_pages);


    return (
        <div>

            <div><h1>Movies in Genre {params.name}</h1>
                <MoviesComponent movies={results} currentPage={currentPage} totalPages={total_pages}/>
            </div>


        </div>
    );
};

export default GenrePage;