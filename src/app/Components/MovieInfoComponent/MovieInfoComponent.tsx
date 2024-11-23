import React, {FC} from 'react';
import {IMovie} from "@/app/models/IMovie";
import styles from './info.module.css'
import Link from "next/link";


type MovieInfoProps = {
    movie: IMovie
}

const MovieInfoComponent:FC<MovieInfoProps> = ({movie}) => {
const genres = movie.genres;
const {popularity, vote_count, adult, budget, status, tagline, overview, production_countries} = movie;
    return (
        <div className={styles.textColor}>

            <p>Popularity: {popularity}</p>
            <p>Vote Count: {vote_count}</p>
            <p>Adult? {adult === true ? 'Yes' : 'No' }</p>
            <p>Budget: {budget}$</p>
            <p>Status: {status}</p>
            <p>Tagline: {tagline ? tagline : 'Without tagline :('}</p>
            <p>Production Countries {production_countries.map(country => <div>{country.name}</div>)}</p>


            <ul className={styles.list}><h4>Genres:</h4>
                {genres.map((genre) => (<Link key={genre.id} href={`/genres/${genre.id}/${genre.name}`}>
                    <li>{genre.name}</li>
                </Link>))}</ul>

            <h2><u>Overview:</u> {overview}</h2>


        </div>
    );
};

export default MovieInfoComponent;