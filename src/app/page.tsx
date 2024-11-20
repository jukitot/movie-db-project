import React from "react";
import MoviesComponent from "@/app/Components/MoviesComponent/MoviesComponent";
import { movieService } from "@/app/services/api.service";


export default async function Home({ searchParams }: { searchParams: { page?: string } }) {
    const page = parseInt(searchParams.page || "1", 10);
    const {results, total_pages} = await movieService.getAllMovies(page);

    return (
        <div>
            <MoviesComponent movies={results} currentPage={page} totalPages={total_pages}/>
        </div>
    );
}
