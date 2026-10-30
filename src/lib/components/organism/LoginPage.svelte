<!--
@component LoginPage

Login page container responsible for coordinating the login flow.

Handles the loading and error states and delegates the visual structure to `LoginPagePanel`.

The login request is performed through `AuthRepository`.
-->
<script lang="ts">
	import { AuthRepository } from "$lib/apps/auth/repository/repository";
	import LoginPagePanel from "../polymers/LoginPagePanel.svelte";
	import { goto, invalidateAll } from '$app/navigation';

	const repo = new AuthRepository();

	let errorMessage: string = $state('');
	let isLoading: boolean = $state(false);
</script>

<LoginPagePanel
	errorMessage={errorMessage}
	isLoading={isLoading}
	onSubmit={async (data) => {
		isLoading = true;
		try {
			await repo.login(data);
			await invalidateAll();
			goto('/');
		} catch (error) {
			errorMessage =
				error instanceof Error
					? error.message
					: "Erro ao autenticar o usuário";
		} finally {
			isLoading = false;
			errorMessage = "";
		}
	}}
/>