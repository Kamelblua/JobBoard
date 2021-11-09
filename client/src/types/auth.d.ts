export type LoginData = {
	email: string;
	password: string;
};

export type RegisterCompanyData = {
	type: number;
	industry: number;
	logo: File;
	name: string;
	email: string;
	password: string;
	password_confirmation: string;
	employees_range: EmployeesCountRange;
	city: string;
	country: string;
	address: string;
	postal_code: string;
	contact_phone: string;
	contact_email: string;
	website_link?: string;
	youtube_link?: string;
	instagram_link?: string;
	twitter_link?: string;
	linkedin_link?: string;
	facebook_link?: string;
};

export type RegisterCandidateData = {
	email: string;
	password: string;
	password_confirmation: string;
	education_name: string;
	graduation_year: number;
};

export type UpdateCandidateData = {
	email: string;
	education_name: string;
	graduation_year: number;
	resume?: any;
};
