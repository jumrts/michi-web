/**
 * @file Defines authentication schemas and related types.
 */

import { z } from 'zod';


/**
 * Schema used to validate user registration data.
 * 
 * @property name - The user's name.
 * @property email - The user's email.
 * @property password - The user's  password.
 */

export const registerSchema = z.object({
	name: z
		.string()
		.min(3, 'O nome precisa ter pelo menos 3 caracteres')
		.max(25, 'O nome pode ter no máximo 25 caracteres'),
	email: z
		.string()
		.email('Informe um e-mail válido')
		.min(3, 'O e-mail é muito curto')
		.max(50, 'O e-mail pode ter no máximo 50 caracteres'),
	password: z
		.string()
		.min(8, 'A senha precisa ter pelo menos 8 caracteres')
		.max(16, 'A senha pode ter no máximo 16 caracteres'),
});

/**
 * Registration data inferred from the registration schema.
 */
export type RegisterData = z.infer<typeof registerSchema>;

/**
 * Represents the response returned after a successful registration.
 * 
 * @property name - The user's name.
 * @property user_token - The authentication token associated with the user.
 */
export interface RegisterResponse {
	name: string;
	user_token: string;
}


/**
 * Schema used to validate user login credentials.
 * 
 * @property email - The user's email address.
 * @property password - The user's password.
 */
export const loginSchema = z.object({
	email: z.string().email().min(3).max(50),
	password: z.string().min(6).max(20),
});

/**
 * Login data inferred from the login schema.
 */
export type LoginData = z.infer<typeof loginSchema>;	