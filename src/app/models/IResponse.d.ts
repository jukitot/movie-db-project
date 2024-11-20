import {IMovie} from "@/app/models/IMovie";

export interface IResponse {
	dates: IDates;
	page: number;
	results: IMovie[];
	total_pages: number;
	total_results: number;
}
export interface IDates {
	maximum: string;
	minimum: string;
}
