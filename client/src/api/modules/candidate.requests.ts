import { AxiosInstance } from "axios";
import { ApiListDataResult, ApiMessageResult, ApiResult } from "types/api.d";
import { LoginData, RegisterCandidateData } from "types/auth.d";
import { Candidate, CandidateProfile } from "types/candidate.d";
import { Application } from "types/shared";

class CandidateRequest {
	private instance: AxiosInstance;

	constructor(instance: AxiosInstance) {
		this.instance = instance;
	}

	async login(data: LoginData): Promise<ApiMessageResult> {
		return this.instance.post("/login", data);
	}

	async register(data: RegisterCandidateData): Promise<ApiMessageResult> {
		return this.instance.post("/register", data);
	}

	async profile(): Promise<ApiResult<CandidateProfile>> {
		return this.instance.get("/profile");
	}

	async get(id: string): Promise<ApiResult<Candidate>> {
		return this.instance.get(`/candidate/${id}`);
	}

	async applications(): Promise<ApiListDataResult<Application>> {
		return this.instance.get("/applications");
	}

	async update(data: FormData): Promise<ApiResult<CandidateProfile>> {
		return this.instance.post("/profile", data);
	}

	async apply(id: number, data: FormData): Promise<ApiResult<CandidateProfile>> {
		return this.instance.post(`/apply/${id}`, data);
	}

	async logout(): Promise<ApiMessageResult> {
		return this.instance.delete("/logout");
	}

	async delete(id: number): Promise<ApiMessageResult> {
		return this.instance.delete(`/admin/candidate/${id}`);
	}
}

export { CandidateRequest };
