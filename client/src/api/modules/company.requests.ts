import { AxiosInstance } from "axios";
import { CreateAdvertisementData } from "types/advertisement";
import { ApiListDataResult, ApiMessageResult, ApiResult } from "types/api.d";
import { LoginData, RegisterCompanyData } from "types/auth.d";
import { Company } from "types/company";
import { Application } from "types/shared";

class CompanyRequest {
	private instance: AxiosInstance;

	constructor(instance: AxiosInstance) {
		this.instance = instance;
	}

	async login(data: LoginData): Promise<ApiMessageResult> {
		return this.instance.post("/company/login", data);
	}

	async applications(): Promise<ApiListDataResult<Application>> {
		return this.instance.get("/company/applications");
	}

	async register(data: RegisterCompanyData): Promise<ApiMessageResult> {
		return this.instance.post("/company/register", data);
	}

	async update(data: FormData): Promise<ApiResult<Company>> {
		return this.instance.post("/company/update", data);
	}

	async get(id: string): Promise<ApiResult<Company>> {
		return this.instance.get(`/company/${id}`);
	}

	async profile(): Promise<ApiResult<Company>> {
		return this.instance.get("/company/profile");
	}

	async delete(id: number): Promise<ApiMessageResult> {
		return this.instance.delete(`/admin/company/${id}`);
	}

	async add(data: CreateAdvertisementData): Promise<ApiMessageResult> {
		return this.instance.post("/advetirsement/create", data);
	}
}

export { CompanyRequest };
