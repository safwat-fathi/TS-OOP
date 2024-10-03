import queryString from "query-string";

// ? implement abort signal
// ? how to get or set auth token from/to

class HttpError extends Error {
	public statusCode: number;
	public statusText: string;
	public body: string;
	public headers: Headers;

	constructor(
		statusCode: number,
		statusText: string,
		body: string,
		headers: Headers
	) {
		super(`HTTP Error: ${statusCode} ${statusText}`);
		Object.setPrototypeOf(this, HttpError.prototype); // Necessary when extending built-in classes
		this.statusCode = statusCode;
		this.statusText = statusText;
		this.body = body;
		this.headers = headers;
	}
}

enum ResponseType {
	JSON = "json",
	TEXT = "text",
	BLOB = "blob",
	ARRAYBUFFER = "arraybuffer",
}
type TMethod = "GET" | "POST" | "PUT" | "DELETE";
type RequestOptions = RequestInit & { signal?: AbortSignal } & Record<
		string,
		any
	>;
type RequestBody = string | FormData | ArrayBuffer;
type RetryConfig = {
	retries?: number;
	delay?: number; // in milliseconds
	backoff?: (retryCount: number) => number; // function to calculate delay
	retryOn?: number[]; // HTTP status codes to retry on
};
abstract class HttpClientAbstract {
	private _baseURL: string;

	private _defaultRetryConfig: RetryConfig = {};

	constructor(baseURL: string) {
		this._baseURL = baseURL;
		this._defaultRetryConfig = {
			retries: 3,
			retryOn: [408, 500, 502, 503, 504],
			delay: 1000,
			backoff: (retryCount: number) => {
				const delay = 1000 * Math.pow(2, retryCount);
				return delay;
			},
		};
	}

	private async _request<T>(
		method: TMethod,
		route: string,
		params?: any,
		options?: RequestOptions
	): Promise<T> {
		let url = this._baseURL + route;

		if (params) {
			const queryStringified = queryString.stringify(params, {
				arrayFormat: "comma",
			});

			url += "?" + queryStringified;
		}

		const response = await fetch(url, {
			method,
			...options,
		});

		await this.handleError(response);

		return this._parseResponse<T>(response, options?.responseType);
	}

	protected async get<T>(
		route: string,
		params?: any,
		options?: RequestOptions
	): Promise<T> {
		return await this._request<T>("GET", route, params, options);
	}

	protected async post<T>(
		route: string,
		body: RequestBody,
		params?: any,
		options?: RequestOptions
	): Promise<T> {
		return await this._request<T>("POST", route, params, { ...options, body });
	}

	protected async put<T>(
		route: string,
		body: RequestBody,
		params?: any,
		options?: RequestOptions
	): Promise<T> {
		return await this._request<T>("PUT", route, params, { ...options, body });
	}

	protected async delete<T>(
		route: string,
		params?: any,
		options?: RequestOptions
	): Promise<T> {
		return await this._request<T>("DELETE", route, params, options);
	}

	private _shouldRetry(error: any, retryOn: number[]): boolean {
		if (error instanceof HttpError) {
			return retryOn.includes(error.statusCode);
		}
		// For network errors or timeouts, you might have custom logic
		return false;
	}

	private async _parseResponse<T>(
		response: Response,
		responseType: ResponseType
	): Promise<T> {
		switch (responseType) {
			case ResponseType.JSON:
				return response.json();
			case ResponseType.TEXT:
				return response.text() as unknown as T;
			case ResponseType.BLOB:
				return response.blob() as unknown as T;
			case ResponseType.ARRAYBUFFER:
				return response.arrayBuffer() as unknown as T;
			default:
				throw new Error(`Unsupported response type: ${responseType}`);
		}
	}

	protected async handleError(response: Response): Promise<void> {
		if (!response.ok) {
			// Attempt to parse the error body
			let errorBody: any;
			try {
				errorBody = await response.json();
			} catch {
				errorBody = await response.text();
			}

			// Throw a custom HttpError with detailed information
			throw new HttpError(
				response.status,
				response.statusText,
				errorBody,
				response.headers
			);
		}
	}
	// ! not implemented yet
	// 	private async _retry<T>( fn: () => Promise<T>, retryConfig: RetryConfig = this._defaultRetryConfig ): Promise<T> {
	// 		try {
	// 			let attempts = 0;

	// 			const {retryOn,retries, delay, backoff} = retryConfig

	// 			while (retries && attempts < retries) {
	// 				try {
	// 					return await fn();

	// 				} catch (error) {
	// 					attempts++;

	// const shouldRetry = this._shouldRetry(error, retryOn);

	// 					if (attempts > retries || !shouldRetry) {
	// 						throw error;
	// 					}

	// 					let waitTime = delay;

	// 					if (error instanceof HttpError) {
	// 				}
	// 			}
	// 		} catch (error) {
	// 			// if (retries > 0) {
	// 			// 	return this._retry(fn, retries - 1);
	// 			// } else {
	// 			// 	throw error;
	// 			// }

	// 		}
	// 	}

	// protected abstract delete: <T>(route: string, params?: any, options?: RequestOptions) => Promise<T>;
	// protected abstract upload: <T>(
	// 	route: string,
	// 	body: RequestBody,
	// 	onUploadProgress?: any,
	// 	options?: RequestOptions
	// ) => Promise<T>;
}
class HttpClient {
	private static _instance: HttpClient | null = null;

	private readonly _auth_token: string;

	private constructor(baseURL: string) {
		this._auth_token = localStorage.getItem("auth_token") || ""; // Get auth token from local storage or other source
	}

	public static get instance() {
		if (this._instance === null)
			this._instance = new HttpClient("XXXXXXXXXXXXXXXXXXXXX");
		return this._instance;
	}

	// public async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
	// 	const response = await this._axios_instance.get<T>(url, config);

	// 	return response.data;
	// }

	// public async post<T>(
	// 	url: string,
	// 	data?: any,
	// 	config?: AxiosRequestConfig
	// ): Promise<T> {
	// 	const response = await this._axios_instance.post<T>(url, data, config);

	// 	return response.data;
	// }

	// public async put<T>(
	// 	url: string,
	// 	data?: any,
	// 	config?: AxiosRequestConfig
	// ): Promise<T> {
	// 	const response = await this._axios_instance.put<T>(url, data, config);

	// 	return response.data;
	// }

	// public async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
	// 	const response = await this._axios_instance.delete<T>(url, config);

	// 	return response.data;
	// }

	// public async upload<T>(
	// 	url: string,
	// 	formData: FormData,
	// 	onUploadProgress?: (progressEvent: AxiosProgressEvent) => void
	// ): Promise<T> {
	// 	const response = await this._axios_instance.post<T>(url, formData, {
	// 		headers: {
	// 			"Content-Type": "multipart/form-data",
	// 		},
	// 		onUploadProgress,
	// 	});

	// 	return response.data;
	// }
}

const httpClient = HttpClient.instance;

export default httpClient;

// Usage: import HttpClient from "./HttpClient";

// const httpClient = new HttpClient();

// Make a GET request
// const data = await httpClient.get("/users");

// Make a POST request
// const newUser = { name: "John Doe" };
// const createdUser = await httpClient.post("/users", newUser);

// Make a PUT request
// const updatedUser = { ...createdUser, name: "Jane Doe" };
// const result = await httpClient.put(`/users/${createdUser.id}`, updatedUser);

// Make a DELETE request
// const deletedUser = await httpClient.delete(`/users/${createdUser.id}`);

// Upload a file
// const fileInput = document.querySelector<HTMLInputElement>("#fileInput");
// const file = fileInput.files[0];
// const formData = new FormData();
// formData.append("file", file);
// const uploadedFile = await httpClient.upload("/files", formData, event => {
//   const percent = Math.round((event.loaded / event.total) * 100);
//   console.log(`Upload progress: ${percent}%`);
// });
