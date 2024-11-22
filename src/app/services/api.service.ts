import {IMovie} from "@/app/models/IMovie";
import {IGenre} from "@/app/models/IGenre";
import {IResponse} from "@/app/models/IResponse";

const base = 'https://api.themoviedb.org/3'
const apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOGVhNTQ1NGViMDk5ODEyY2IzZTI4NDJiNWI5YmEyNSIsIm5iZiI6MTczMTYxNDc4NS43NDk2NTQ4LCJzdWIiOiI2NTUxMDkyMDJmY2NlZTAxMWIxOTg4ZGMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.zDDBDCIv7hj725QybZ_lrE4E4lXz9rkczTBogXeTd_s'


const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${apiKey}`
}

const urlBuilder = {
    movieBaseUrl: '/movie',
    allMovies: () => `${base}/discover/movie`,
    oneMovie: (id: number) => `${base}/movie/${id}`,
    genres: () => `${base}/genre/movie/list`,
    searchMovie: () => `${base}/search/movie`
}

const movieService = {
    getAllMovies: async (page: number = 1): Promise<IResponse> => {
        const response = await fetch(`${urlBuilder.allMovies()}?page=${page}`, {headers})
        const movies : IResponse = await response.json()
        console.log(movies);
        return movies
    },
    getMovieById: async (id: number): Promise<IMovie | null> => {
        const response = await fetch(urlBuilder.oneMovie(id), {headers})
        const movie = await response.json();
        return movie
    },
    getGenres: async (): Promise<IGenre[]> => {
        const response = await fetch(urlBuilder.genres(), {headers})
        const {genres} = await response.json();
        return genres

    },
    getMovieByGenre: async (genreId: number, page: number = 1): Promise<IResponse> => {
        const response = await fetch(`${urlBuilder.allMovies()}?with_genres=${genreId}&page=${page}`, {headers});
        const movies:IResponse = await response.json();
        return movies;
    },
    getSearchResult: async (query: string, page: number = 1) :Promise<IResponse> => {
        const response = await fetch(`${urlBuilder.searchMovie()}?query=${query}&page=${page}`, {headers});
        const movies: IResponse = await response.json();
        return movies;
    }
}

export {movieService}

