import React from 'react';
import {movieService} from "@/app/services/api.service";
import Link from "next/link";

const GenresComponent = async () => {
    const genres = await movieService.getGenres()

    return (
        <div>
            Genres list
            <ul>
                {genres.map((genre) =>
                    <Link href={`/genres/${genre.id}/${genre.name}`} key={genre.id}>
                        <li>{genre.name}</li>
                    </Link>
                )}
            </ul>
        </div>
    );
};

export default GenresComponent;