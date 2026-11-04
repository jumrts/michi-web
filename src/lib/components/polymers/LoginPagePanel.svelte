<!--
@component LoginPagePanel

Layout component for the login page.

Combines the marketing section with the registration form and 
forwards validated form data through the `onSubmit` callback.

@prop errorMessage - Error message displayed in the registration form. 
@prop isLoading - Controls the loading state of the registration form. 
@prop onSubmit - Callback invoked with the validated registration data. 
-->

<script lang="ts">
	import AuthPanel from "./AuthPanel.svelte";
	import LoginFormCard from "../oligomers/LoginFormCard.svelte";
	import type { LoginData } from "$lib/apps/auth/schemas";

	let {
		errorMessage,
		isLoading,
		onSubmit
	}: {
		errorMessage?: string;
		isLoading?: boolean;
		onSubmit?: (data: LoginData) => void;
	} = $props();
</script>

<AuthPanel>
	<LoginFormCard
		{errorMessage}
		{isLoading}
		onSuccess={(data) => onSubmit?.(data)}
	/>

	{#snippet footer()}
		<span class="text-base text-tx-secondary">
			Ainda não tem conta?
			<a href="/auth/register" 
				class="relative w-fit cursor-pointer text-tx-expose
				after:absolute after:bottom-0 after:left-0
				after:h-px after:w-full after:origin-left
				after:scale-x-0 after:bg-tx-expose
				after:transition-transform after:duration-300
				hover:after:scale-x-100"
			>
				Criar uma agora
			</a>
		</span>
	{/snippet}
</AuthPanel>