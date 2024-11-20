import React from 'react';
import {movieService} from "@/app/services/api.service";
import MovieCardComponent from "@/app/Components/MovieCardComponent/MovieCardComponent";
import Link from "next/link";
import PaginationComponent from "@/app/Components/pagination/PaginationComponent";
type Params = {
    genreId: string,
    name: string,
    currentPage: string
}
const GenrePage = async({params}:{params:Params}) => {


    const genreId = parseInt(params.genreId, 10)
    const currentPage = parseInt(params.currentPage || "1", 10)

    const {results, total_pages} = await movieService.getMovieByGenre(genreId, currentPage)



    return (
        <div>

            <div><h1>Movies in Genre {params.name}</h1>
                {results.map((movie) => (<Link key={movie.id} href={`/${movie.id}`}>
                        <MovieCardComponent key={movie.id} movie={movie}/>
                    </Link>
                ))}</div>
            <div>
                <PaginationComponent currentPage={currentPage} totalPages={total_pages} />
            </div>

        </div>
    );
};

export default GenrePage;