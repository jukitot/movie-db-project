import React from 'react';
import {movieService} from "@/app/services/api.service";

import MoviesComponent from "@/app/Components/MoviesComponent/MoviesComponent";
import styles from './page.module.css'

type Params = {
    genreId: string,
    name: string,
    currentPage: string
}
const GenrePage = async({params, searchParams}:{params:Params; searchParams: { page?: string }}) => {


    const genreId = parseInt(params.genreId, 10)
    const currentPage = parseInt(searchParams.page || "1", 10)

    const {results, total_pages} = await movieService.getMovieByGenre(genreId, currentPage)

    const genreName = decodeURIComponent(params.name);


    return (
        <div>

            <div><h1 className={styles.title}>Movies in Genre {genreName}</h1>
                <MoviesComponent movies={results} currentPage={currentPage} totalPages={total_pages} />
            </div>


        </div>
    );
};

export default GenrePage;