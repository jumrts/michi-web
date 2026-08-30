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
export const load: LayoutServerLoad = async ({ cookies }) => {
	const token = cookies.get('access_token');

	if (!token) {
		throw redirect(303, '/login');
	}

	return {};
};