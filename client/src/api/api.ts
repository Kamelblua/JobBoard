import axios, { AxiosInstance } from "axios";
import { auth } from "api/auth";
import { AdvertisementRequest } from "api/modules/advertisements.requests";
import { SharedRequest } from "api/modules/shared.requests";
import { CandidateRequest } from "api/modules/candidate.requests";
import { AdminRequest } from "api/modules/admin.requests";
import { CompanyRequest } from "api/modules/company.requests";

class Api {
	public url: string;
	private instance: AxiosInstance;

	public advertisement: AdvertisementRequest;
	public shared: SharedRequest;
	public candidate: CandidateRequest;
	public company: CompanyRequest;
	public admin: AdminRequest;

	constructor() {
		this.url = auth.base_url;
		this.instance = axios.create({
			baseURL: this.url,
			headers: { "Content-Type": "application/json" },
			withCredentials: true,
		});

		this.advertisement = new AdvertisementRequest(this.instance);
		this.shared = new SharedRequest(this.instance);
		this.candidate = new CandidateRequest(this.instance);
		this.company = new CompanyRequest(this.instance);
		this.admin = new AdminRequest(this.instance);
	}
}

const api = new Api();

export { api };
