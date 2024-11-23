import React, {FC} from "react";
import Link from "next/link";
import styles from "./movies.module.css";
import PaginationComponent from "@/app/Components/pagination/PaginationComponent";
import {IMovie} from "@/app/models/IMovie";
import MovieCardComponent from "@/app/Components/MovieCardComponent/MovieCardComponent";
import {movieService} from "@/app/services/api.service";



type MoviesProps = {
    movies: IMovie[];
    currentPage: number;
    totalPages: number;
    query?: string;

}

const MoviesComponent:FC<MoviesProps> = async ({ movies, currentPage, totalPages, query}) => {


    return (
        <div>
            <div className={styles.movies}>


            {movies.map((movie) => (
                <Link key={movie.id} href={`/${movie.id}`} className={styles.card}>
                    <MovieCardComponent movie={movie}/>

                </Link>
            ))}
            </div>
            <div>
               <PaginationComponent currentPage={currentPage} totalPages={totalPages} query={query}/>
            </div>

        </div>
    );
};

export default MoviesComponent;
