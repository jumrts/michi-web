/**
 * @file Defines the layout server load function.
 */

import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals }) => {
    return { user: locals.user ?? null };
};