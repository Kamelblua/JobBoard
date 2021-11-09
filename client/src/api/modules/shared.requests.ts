import { AxiosInstance } from "axios";
import { ApiListDataResult } from "types/api.d";
import { Industry, Language, Position, Type } from "types/jobs";

class SharedRequest {
	private instance: AxiosInstance;

	constructor(instance: AxiosInstance) {
		this.instance = instance;
	}

	async positions(): Promise<ApiListDataResult<Position>> {
		return this.instance.get("/positions");
	}

	async industries(): Promise<ApiListDataResult<Industry>> {
		return this.instance.get("/industries");
	}

	async types(): Promise<ApiListDataResult<Type>> {
		return this.instance.get("/types");
	}

	async languages(): Promise<ApiListDataResult<Language>> {
		return this.instance.get("/languages");
	}
}

export { SharedRequest };
