import { Advertisement } from "./advertisement";
import { CandidateProfile } from "./candidate";
import { Company } from "./company";
import { File } from "./file";

export type User = {
	id: number;
	email: string;
	role: string;
	created_at: string;
};

export type Application = {
	id: number;
	more: string;
	candidate: CandidateProfile;
	company: Company;
	advertisement: Advertisement;
	resume: File;
	created_at: string;
};
