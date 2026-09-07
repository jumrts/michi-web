/** 
 * @file Protects authenticated routes by validating the access token cookie. 
 */

import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

/**
 * Ensures that the user is authenticated before accessing protected routes. 
 * 
 * Redirects unauthenticated users to the login page. 
 */
export const load: LayoutServerLoad = async ({ locals }) => {
	if (!locals.user) {
		throw redirect(303, '/auth/login');
	}

	return { user: locals.user };
};