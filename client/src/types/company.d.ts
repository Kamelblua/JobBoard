import { Advertisement } from "./advertisement";
import { File } from "./file.d";

export type Company = {
	id: number;
	type: {
		id: number;
		name: CompanyTypeEnum;
	};
	industry: {
		id: number;
		name: CompanyIndustryEnum;
	};
	logo: File;
	name: string;
	employees_range: EmployeesCountRange;
	city: string;
	country: string;
	address: string;
	postal_code: string;
	website_link?: string;
	youtube_link?: string;
	instagram_link?: string;
	twitter_link?: string;
	linkedin_link?: string;
	facebook_link?: string;
	contact_phone: string;
	contact_email: string;
	advertisements: Advertisement[];
	created_at: string;
};

export type CompanyCreate = {
	type_id?: number;
	industry_id?: number;
	logo?: File;
	name?: string;
	employees_range?: EmployeesCountRange;
	city?: string;
	country?: string;
	address?: string;
	postal_code?: string;
	contact_phone?: string;
	contact_email?: string;
	website_link?: string;
	youtube_link?: string;
	instagram_link?: string;
	twitter_link?: string;
	linkedin_link?: string;
	facebook_link?: string;
};

export type CompanyUpdate = {
	id?: number;
	type?: {
		id: number;
		name: CompanyTypeEnum;
	};
	industry?: {
		id: number;
		name: CompanyIndustryEnum;
	};
	credentials?: {
		id: number;
		email: string;
	};
	logo?: File;
	name?: string;
	email?: string;
	employees_range?: EmployeesCountRange;
	city?: string;
	country?: string;
	address?: string;
	postal_code?: string;
	website_link?: string;
	youtube_link?: string;
	instagram_link?: string;
	twitter_link?: string;
	linkedin_link?: string;
	facebook_link?: string;
	contact_phone?: string;
	contact_email?: string;
};

export type Company = {
	id: number;
	email: string;
	created_at: string;
};

export enum EmployeesCountRange {
	Low = "1-10",
	Medium = "11-100",
	Large = "101-1000",
	XL = "1000+",
}

export enum CompanyTypeEnum {
	Large = "Large",
	StartUp = "Start-up",
	SME = "SME",
	Other = "Government / Charity / Public Institution / Other",
}

export enum CompanyIndustryEnum {
	Audit = "Audit",
	Consulting = "Consulting",
	Legal = "Legal",
	ManagementConsulting = "Management Consulting",
	AccountingServices = "Accounting services",
	BankingFinance = "Banking / Finance",
	Insurance = "Insurance",
	LuxuryFashion = "Luxury / Fashion",
	Retail = "Retail",
	ConsumerGoods = "Consumer goods",
	EnergyUtilitiesOil = "Energy / Utilities / Oil & Gas",
	Environment = "Environment",
	FoodBeverage = "Food & Beverage",
	Aerospace = "Aerospace",
	Automotive = "Automotive",
	Chemistry = "Chemistry",
	Defense = "Defense",
	Electronics = "Electronics",
	Materials = "Materials",
	OtherIndustries = "Other Industries",
	AgricultureForestIndustry = "Agriculture / Forest industry",
	MaritimeRailway = "Maritime / Railway",
	ITConsultingSoftware = "IT / IT Consulting / Software",
	Telecoms = "Telecoms",
	Cosmetics = "Cosmetics",
	MedicinePhrmaceuticalsHealthcare = "Medicine / Pharmaceuticals / Healthcare",
	RecruitmentTraining = "Recruitment / Training",
	Catering = "Catering",
	TransportLogistics = "Transport / Logistics",
	OtherServicesToIndividualsAndBusinesses = "Other services to individuals and businesses",
	RD = "R&D",
	Engineering = "Engineering",
	DigitalEcommerce = "Digital / E-Commerce",
	MediaPublishing = "Media / Publishing",
	CommunicationAdvertising = "Communication / Advertising",
	PublicGovernmentEducationArmedForces = "Public / Government / Education / Armed Forces",
	SocialNGOCharity = "Social / NGO / Charity",
	EvientsTourismHospitality = "Events / Tourism / Hospitality",
	LeisureCultureSports = "Leisure / Culture / Sports",
	Other = "Other",
}
