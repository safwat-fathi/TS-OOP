import axios, {
  AxiosInstance,
  AxiosProgressEvent,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

class HttpClient {
  private static _instance: HttpClient | null = null;
  private readonly _axios_instance: AxiosInstance;
  private readonly _auth_token: string;

  private constructor(baseURL: string) {
    this._auth_token = localStorage.getItem("auth_token") || ""; // Get auth token from local storage or other source

    this._axios_instance = axios.create({
      baseURL,
      headers: {
        Authorization: `Bearer ${this._auth_token}`, // Add auth token to request headers
      },
    });

    this._axios_instance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => config,
      (error: any) => Promise.reject(error)
    );

    this._axios_instance.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      (error: any) => Promise.reject(error)
    );
  }

  public static get instance() {
    if (this._instance === null)
      this._instance = new HttpClient("XXXXXXXXXXXXXXXXXXXXX");
    return this._instance;
  }

  public async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this._axios_instance.get<T>(url, config);

    return response.data;
  }

  public async post<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response = await this._axios_instance.post<T>(url, data, config);

    return response.data;
  }

  public async put<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response = await this._axios_instance.put<T>(url, data, config);

    return response.data;
  }

  public async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this._axios_instance.delete<T>(url, config);

    return response.data;
  }

  public async upload<T>(
    url: string,
    formData: FormData,
    onUploadProgress?: (progressEvent: AxiosProgressEvent) => void
  ): Promise<T> {
    const response = await this._axios_instance.post<T>(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress,
    });

    return response.data;
  }
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
