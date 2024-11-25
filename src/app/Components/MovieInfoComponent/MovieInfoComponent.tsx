import React, {FC} from 'react';
import {IMovie} from "@/app/models/IMovie";
import styles from './info.module.css'
import Link from "next/link";

type MovieInfoProps = {
    movie: IMovie
}

const MovieInfoComponent: FC<MovieInfoProps> = ({movie}) => {
    const genres = movie.genres;
    const {
        title,
        popularity,
        vote_count,
        adult,
        budget,
        status,
        tagline,
        overview,
        production_countries,
        release_date,
        production_companies,
        backdrop_path
    } = movie;

    const defaultImg = 'https://img.freepik.com/premium-vector/no-photo-available-vector-icon-default-image-symbol-picture-coming-soon-web-site-mobile-app_87543-18055.jpg'

    return (
        <div>
            <img className={styles.backdrop} src={backdrop_path ? `https://image.tmdb.org/t/p/w500${backdrop_path}` : defaultImg} alt={title}/>
            <h2 className={styles.title}>PRODUCTION COMPANIES</h2>
            <div className={styles.companies}>

                {production_companies.map((company) => (<div className={styles.companyBox} key={company.id}>
                    <img className={styles.logo}
                         src={company.logo_path ? `https://image.tmdb.org/t/p/w500${company.logo_path}` : defaultImg}
                         alt={company.name}/>
                    <p>{company.name}</p>
                </div>))}
            </div>

            <div className={styles.textColor}>


                <div className={styles.flex}>
                    <div className={styles.boxInfo}>
                        <p><b>Release date</b></p>
                        <p className={styles.text24}>{release_date}</p>
                    </div>
                    <div className={styles.boxInfo}>
                        <p><b>Popularity</b></p>
                        <p className={styles.text24}>{popularity}</p>
                    </div>

                    <div className={styles.boxInfo}>
                        <p><b>Vote Count</b></p>
                        <p className={styles.text24}>{vote_count}</p>
                    </div>
                    <div className={styles.boxInfo}>
                        <p><b>Adult?</b></p>
                        <p className={styles.text24}>{adult ? 'Yes' : 'No'}</p>
                    </div>
                    <div className={styles.boxInfo}>
                        <p><b>Budget</b></p>
                        <p className={styles.text24}>{budget}$</p>
                    </div>
                    <div className={styles.boxInfo}>
                        <p><b>Status</b></p>
                        <p className={styles.text24}>{status}</p>
                    </div>

                    <div className={styles.boxInfo}>
                        <p>Tagline</p>
                        <p className={styles.text24}>{tagline ? tagline : 'Without tagline :('}</p>
                    </div>

                    <div className={styles.boxInfo}>
                        <p>Production Countries</p>

                        {production_countries.map((country, index) => <p className={styles.text24}
                                                                         key={index}>{country.name}</p>)}
                    </div>
                </div>

                <div className={styles.list}>
                    <h2 className={styles.title}>GENRES</h2>

                    {genres.map((genre) => (<Link key={genre.id} href={`/genres/${genre.id}/${genre.name}`}>
                        <div className={styles.genre}>
                            <p>{genre.name}</p></div>
                    </Link>))}</div>
            </div>
            <h2 className={styles.title}>OVERVIEW</h2>
            <h2>{overview}</h2>
        </div>
    );
};

export default MovieInfoComponent;