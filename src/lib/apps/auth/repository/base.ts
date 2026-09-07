/**
 * @file Defines the base authentication repository contract.
 */

import type { RegisterData, UserResponse } from "../schemas";

export abstract class AuthBaseRepository {

    /**
     * Registers a new user.
     * 
     * @param data - The data required to create a new user account.
     * @returns UserResponse 
     */
    abstract register(data: RegisterData): Promise<UserResponse>;


    /**
     * Authenticates a user with the provided credentials.
     * 
     * @param data - The user credentials required for authentication.
     * @returns UserResponse 
     */
    abstract login(data: RegisterData): Promise<UserResponse>;
}