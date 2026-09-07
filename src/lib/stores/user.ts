/**
 * @file Provides a Svelte store containing the user data.
 */

import { page } from '$app/stores';
import { derived } from 'svelte/store';

export const user = derived(page, ($page) => $page.data.user ?? null);