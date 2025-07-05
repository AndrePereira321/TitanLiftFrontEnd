import type { ServerResponse } from "@/types/services";

class BaseService {
	private globalHeaders: Record<string, string> = {};
	private baseUrl: string = import.meta.env.VITE_SERVER_URL;

	async get<T>(
		path: string,
		queryArgs?: Record<string, unknown>,
		headers?: Record<string, string>,
	): Promise<ServerResponse<T>> {
		const response = await fetch(this.buildUrl(path, queryArgs), {
			headers: {
				...this.globalHeaders,
				...(headers ?? {}),
			},
		});
		return this.handleServerResponse<T>(response);
	}

	async post<T>(
		path: string,
		queryArgs?: Record<string, unknown>,
		bodyData?: unknown,
		headers?: Record<string, string>,
	) {
		const response = await fetch(this.buildUrl(path, queryArgs), {
			body: JSON.stringify(bodyData),
			headers: {
				...this.globalHeaders,
				...(headers ?? {}),
			},
			method: "POST",
		});

		return this.handleServerResponse<T>(response);
	}

	setGlobalHeader(key: string, value: string): void {
		this.globalHeaders[key] = value;
	}

	removeGlobalHeader(key: string): void {
		delete this.globalHeaders[key];
	}

	private handleServerResponse<T>(response: Response): Promise<ServerResponse<T>> {
		//TODO Check how to handle server error and invalid http status.
		return response.json();
	}

	private buildUrl(path: string, queryArgs?: Record<string, unknown>): string {
		const url = new URL(path, this.baseUrl);
		if (!queryArgs || Object.keys(queryArgs).length === 0) {
			return url.toString();
		}

		Object.entries(queryArgs).forEach(([key, value]) => {
			if (!value) {
				return;
			}
			url.searchParams.append(key, String(value));
		});

		return url.toString();
	}
}

const baseService = new BaseService();
export default baseService;
