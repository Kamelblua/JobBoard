import { File } from "types/file";

export type CandidateProfile = {
	email: string;
	graduation_year: number;
	education_name: string;
	resume: File;
	created_at: string;
	updated_at: string;
};

export type Candidate = {
	id: number;
	email: string;
	created_at: string;
};
