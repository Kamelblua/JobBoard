export type Position = {
	id: number;
	name: string;
};

export type Language = {
	id: number;
	name: string;
};

export type Industry = {
	id: number;
	parent_id?: number;
	name: string;
};

export type Type = {
	id: number;
	name: string;
};

export enum PositionEnum {
	Internship = "Internship",
	Apprenticeship = "Apprenticeship",
	FullTime = "Full-time",
	FixedTerm = "Fixed-term",
	PartTime = "Part-time / Student job",
}

export enum LanguageEnum {
	FR = "FR", // French
	EN = "EN", // English
	DE = "DE", // German
	HI = "HI", // Hindi
	HU = "HU", // Hungarian
	IT = "IT", // Italian
	JA = "JA", // Japanese
	KO = "KO", // Korean
	PL = "PL", // Polish
	PT = "PT", // Portuguese
	RU = "RU", // Russian
	TR = "TR", // Turkish
	UK = "UK", // Ukranian
	SQ = "SQ", // Albanian
	HY = "HY", // Armenian
	ZH = "ZH", // Chinese
	DA = "DA", // Danish
}
