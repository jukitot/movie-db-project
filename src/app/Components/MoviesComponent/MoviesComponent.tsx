import React, {FC} from "react";
import Link from "next/link";
import styles from "./movies.module.css";
import PaginationComponent from "@/app/Components/pagination/PaginationComponent";
import {IMovie} from "@/app/models/IMovie";
import MovieCardComponent from "@/app/Components/MovieCardComponent/MovieCardComponent";


type MoviesProps = {
    movies: IMovie[];
    currentPage: number;
    totalPages: number;
}

const MoviesComponent:FC<MoviesProps> = ({ movies, currentPage, totalPages}) => {

    return (
        <div>
            <div className={styles.movies}>


            {movies.map((movie) => (
                <Link key={movie.id} href={`/${movie.id}`} className={styles.card}>


                    <MovieCardComponent movie={movie} />
                </Link>
            ))}
            </div>
            <div>
               <PaginationComponent currentPage={currentPage} totalPages={totalPages}/>
            </div>

        </div>
    );
};

export default MoviesComponent;
