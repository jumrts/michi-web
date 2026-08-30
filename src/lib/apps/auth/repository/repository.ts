/**
 * @file Implements the authentication repository.
 */

import type { LoginData, RegisterData, RegisterResponse } from "../schemas";
import { request } from "../../../apps/tools/request";
import { AuthBaseRepository } from "./base";
import { registerSchema } from "../schemas";

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
	 * @returns A promise containing the registered user's name and authentication token.
	 * @throws {Error} If validation fails or the registration request is unsuccessful.
	 */
	async register(data: RegisterData): Promise<RegisterResponse> {
		const result = registerSchema.safeParse(data);

		if (!result.success) {
				throw new Error(result.error.message);
		}

		try {
			const response = await request<RegisterResponse>(`${this.prefix_url}/singup`, data, this.headers, "POST");
			return {
				name: data.name,
				user_token: response.user_token,
			}

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
	 * @returns A promise that resolves when authentication succeeds.
	 * @throws {Error} If validation fails or authentication is unsuccessful.
	 */
	async login(data: LoginData): Promise<void> {
			// TODO: Implement user authentication.
			console.log(data);
	}
}