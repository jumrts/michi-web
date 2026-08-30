/**
 * @file Defines the base authentication repository contract.
 */

import type { RegisterData, RegisterResponse } from "../schemas";

export abstract class AuthBaseRepository {

    /**
     * Registers a new user.
     * 
     * @param data - The data required to create a new user account.
     * @returns A promise that resolves with the registered user's data.
     */
    abstract register(data: RegisterData): Promise<RegisterResponse>;


    /**
     * Authenticates a user with the provided credentials.
     * 
     * @param data - The user credentials required for authentication.
     * @returns A promise that resolves when authentication succeeds.
     */
    abstract login(data: RegisterData): Promise<void>;
}