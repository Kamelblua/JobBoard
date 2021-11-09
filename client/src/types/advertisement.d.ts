import { Company } from "./company";
import { Language, Position } from "./jobs";

export type Advertisement = {
	id: number;
	company: Company;
	positions: Position[];
	languages: Language[];
	title: string;
	content: string;
	city: string;
	remote: boolean;
	created_at: string;
};

export type AdvertisementSearch = {
	page: number;
	limit: number;
	search: string;
	position_ids?: number[];
	industry_ids?: number[];
	language_ids?: number[];
};

export type CreateAdvertisementData = {
	title: string;
	text: string;
	city: string;
	remote: boolean;
	positions: number[];
	languages: number[];
};
