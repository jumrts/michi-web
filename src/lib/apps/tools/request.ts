/**
 * @file Provides a shared utility for making HTTP requests to the API. 
 */

const API_BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:8080";

/**
 * Sends an HTTP request to the API.
 * 
 * @template T - The expected response type.
 * @param path - The API endpoint path. 
 * @param body - Optional request payload. 
 * @param headers - Optional HTTP headers. 
 * @param method - The HTTP method used for the request. 
 * @returns A promise containing the parsed API response. 
 * @throws {Error} If the API returns an unsuccessful response. 
 */ 
export async function request<T>(
	path: string,
	body?: unknown,
	headers: Record<string, string> = {},
	method: "GET" | "POST" | "PATCH" | "DELETE" = "POST"
): Promise<T> {
	const token = localStorage.getItem("access_token");

	const response = await fetch(`${API_BASE_URL}/${path}`, {
		method,
		headers: {
			...headers,
			...(token ? { Authorization: `Bearer ${token}` } : {}),
		},
		body: body ? JSON.stringify(body) : undefined,
	});

	if (!response.ok) {
		const errorData = await response.json().catch(() => null);
		throw new Error(errorData?.detail ?? `Erro ${response.status}`);
	}

	if (response.status === 204) return undefined as T;

	return response.json();
}