import React, {FC} from "react";
import Link from "next/link";
import styles from "./movies.module.css";
import PaginationComponent from "@/app/Components/pagination/PaginationComponent";
import {IMovie} from "@/app/models/IMovie";

type MoviesProps = {
    movies: IMovie[];
    currentPage: number;
    totalPages: number;
}

const MoviesComponent:FC<MoviesProps> = ({ movies, currentPage, totalPages }) => {

    return (
        <div>
            <div className={styles.movies}>


            {movies.map((movie) => (
                <Link key={movie.id} href={
                    {
                        pathname: `/${movie.id}`
                    }
                }>
                    <div className={styles.card}>
                        <h2>{movie.title}</h2>
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                            alt={movie.title}
                        />
                    </div>
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
