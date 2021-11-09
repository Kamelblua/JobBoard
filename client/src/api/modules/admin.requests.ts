import { AxiosInstance, AxiosResponse } from "axios";
import { Advertisement } from "types/advertisement";
import { ApiListDataResult, ApiMessageResult, Search } from "types/api.d";
import { LoginData, UpdateCandidateData } from "types/auth.d";
import { Candidate } from "types/candidate";
import { Company } from "types/company";
import { Admin } from "types/admin";

class AdminRequest {
	private instance: AxiosInstance;

	constructor(instance: AxiosInstance) {
		this.instance = instance;
	}

	async dashboard(): Promise<
		AxiosResponse<{
			candidate_count: number;
			company_count: number;
			advertisement_count: number;
			application_count: number;
		}>
	> {
		return this.instance.get("/admin/dashboard");
	}

	async login(data: LoginData): Promise<ApiMessageResult> {
		return this.instance.post("/admin/login", data);
	}

	async getAllAdvertisements(search: Search): Promise<ApiListDataResult<Advertisement>> {
		return this.instance.post("/admin/advertisements/search", search);
	}

	async getAllCandidates(search: Search): Promise<ApiListDataResult<Candidate>> {
		return this.instance.post("/admin/candidates/search", search);
	}

	async updateCandidate(id: string, data: UpdateCandidateData): Promise<ApiMessageResult> {
		return this.instance.post(`/admin/candidate/${id}/edit`, data);
	}

	async getAllCompanies(search: Search): Promise<ApiListDataResult<Company>> {
		return this.instance.post("/admin/companies/search", search);
	}

	async getAllAdmins(search: Search): Promise<ApiListDataResult<Admin>> {
		return this.instance.post("/admin/admins/search", search);
	}
}

export { AdminRequest };
