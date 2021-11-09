import { AxiosResponse } from "axios";

export type Search = {
	page: number;
	limit: number;
	search?: string;
};

export type SingleDataResponse<T> = {
	data: T;
};

export type Error = {
	[x: string]: any;
};

export type MessageResponse = {
	message: string;
};

export type ServiceResponse<T> = T;

export type ListDataResponse<T> = {
	count: number;
	total: number;
	items: T[];
};

export type ApiResult<T> = AxiosResponse<ServiceResponse<T>>;
export type ApiMessageResult = AxiosResponse<MessageResponse>;
export type ApiArrayDataResult<T> = AxiosResponse<T[]>;
export type ApiListDataResult<T> = AxiosResponse<ListDataResponse<T>>;
