import type { Handle } from '@sveltejs/kit';
import { request } from './lib/apps/tools/request';

type MeResponse = {
    id: string;
    name: string;
    email: string;
};

/**
 * Decode the access token and set the user 
 * data to locals in each request.
 * 
 * @param event
 */
export const handle: Handle = async ({ event, resolve }) => {

    const token = event.cookies.get('access_token');

    if (token) {
        try {
        event.locals.user = await request<MeResponse>(
            'auth/me',
            undefined,
            { Cookie: `access_token=${token}` },
            'GET'
        );
        } catch {
            event.locals.user = null;
        }
    }

    return resolve(event);
};