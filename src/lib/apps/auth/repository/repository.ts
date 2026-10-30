/**
 * @file Implements the authentication repository.
 */

import type { LoginData, RegisterData, UserResponse } from "../schemas";
import { request } from "../../../apps/tools/request";
import { AuthBaseRepository } from "./base";
import { registerSchema, loginSchema } from "../schemas";


export class AuthRepository extends AuthBaseRepository {
	private headers: Record<string, string> = {
		"Content-Type": "application/json",
	};
	prefix_url: string = "auth";

	/**
	 * Registers a new user.
	 * 
	 * Validates the provided registration data and sends it
	 * to API.
	 * 
	 * @param data - The data required to register the user.
	 * @returns UserResponse
	 * @throws {Error} If validation fails or the registration request is unsuccessful.
	 */
	async register(data: RegisterData): Promise<UserResponse> {
		const result = registerSchema.safeParse(data);

		if (!result.success) {
				throw new Error(result.error.message);
		}

		try {
			return await request<UserResponse>(`${this.prefix_url}/register`, data, this.headers, "POST");
		} catch (error) {
			const message = error instanceof Error ? error.message : "Erro ao registrar o usuário";
			throw new Error(message);
		}
	}

	/**
	 * Authenticates a user.
	 *
	 * Validates the provided credentials and sends them
	 * to the authentication API.
	 *
	 * @param data - The credentials required to authenticate the user.
	 * @returns UserResponse
	 * @throws {Error} If validation fails or authentication is unsuccessful.
	 */
	async login(data: LoginData): Promise<UserResponse> {
		const result = loginSchema.safeParse(data);

		if (!result.success) {
			throw new Error(result.error.message);
		}

		try {
			return await request<UserResponse>(`${this.prefix_url}/login`, data, this.headers, "POST");
		} catch (error) {
			const message = error instanceof Error ? error.message : "Erro ao autenticar o usuário";
			throw new Error(message);
		}
	}
}