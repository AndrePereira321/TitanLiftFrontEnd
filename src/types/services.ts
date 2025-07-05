export interface ServerResponse<T> {
	status: boolean;
	data: T;
	errors?: ServerErrorResponse[];
}

export interface ServerErrorResponse {
	errorCode: string;
	errorMessage: string;
}
