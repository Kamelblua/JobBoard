import { AxiosInstance } from "axios";
import { Advertisement, AdvertisementSearch } from "types/advertisement";
import { ApiListDataResult, ApiMessageResult } from "types/api.d";

class AdvertisementRequest {
	private instance: AxiosInstance;

	constructor(instance: AxiosInstance) {
		this.instance = instance;
	}

	async search(search: AdvertisementSearch): Promise<ApiListDataResult<Advertisement>> {
		return this.instance.post("/advertisements", search);
	}

	async delete(id: number): Promise<ApiMessageResult> {
		return this.instance.delete(`/admin/advertisement/${id}`);
	}
}

export { AdvertisementRequest };
