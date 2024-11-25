import {IGenre} from "@/app/models/IGenre";

export interface IMovie {
	adult: boolean;
	backdrop_path: string;
	belongs_to_collection: Belongs_to_collection;
	budget: number;
	genres: IGenre[];
	genre_ids:number[];
	homepage: string;
	id: number;
	imdb_id: string;
	origin_country: string[];
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	production_companies: Production_companies[];
	production_countries: Production_countries[];
	release_date: string;
	revenue: number;
	runtime: number;
	spoken_languages: Spoken_languages[];
	status: string;
	tagline: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}
export interface Belongs_to_collection {
	id: number;
	name: string;
	poster_path: string;
	backdrop_path: string;
}
export interface Production_companies {
	id: number;
	logo_path: string;
	name: string;
	origin_country: string;
}
export interface Production_countries {
	iso_3166_1: string;
	name: string;
}
export interface Spoken_languages {
	english_name: string;
	iso_639_1: string;
	name: string;
}