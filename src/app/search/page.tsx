import React from 'react';
import {movieService} from "@/app/services/api.service";
import MoviesComponent from "@/app/Components/MoviesComponent/MoviesComponent";

type SearchParams = Promise<{ [key: string]: string }>
const SearchPage = async (props: { searchParams: SearchParams }) => {

    const searchParams = await props.searchParams;

    const movieNameQuery = (searchParams.query || '')

    const currentPage = parseInt(searchParams.page || "1", 10)
    const {results, total_pages} = await movieService.getSearchResult(movieNameQuery, currentPage)

    return (
        <div>
            <MoviesComponent
                movies={results}
                currentPage={currentPage}
                totalPages={total_pages}
                query={movieNameQuery}/>
        </div>
    );
};

export default SearchPage;