<!--
@component RegisterPagePanel

Layout component for the registration page.

Combines the marketing section with the registration form and 
forwards validated form data through the `onSubmit` callback.

@prop errorMessage - Error message displayed in the registration form. 
@prop isLoading - Controls the loading state of the registration form. 
@prop onSubmit - Callback invoked with the validated registration data. 
-->

<script lang="ts">
	import AuthPanel from "./AuthPanel.svelte";
	import RegisterFormCard from "../oligomers/RegisterFormCard.svelte";
	import type { RegisterData } from "$lib/apps/auth/schemas";

	let {
		errorMessage,
		isLoading,
		onSubmit
	}: {
		errorMessage?: string;
		isLoading?: boolean;
		onSubmit?: (data: RegisterData) => void;
	} = $props();
</script>

<AuthPanel>
	<RegisterFormCard
		{errorMessage}
		{isLoading}
		onSuccess={(data) => onSubmit?.(data)}
	/>

	{#snippet footer()}
		<span class="text-base text-tx-secondary">
			Já tem conta?
			<a href="/auth/login" 
				class="relative w-fit cursor-pointer text-tx-expose
				after:absolute after:bottom-0 after:left-0
				after:h-px after:w-full after:origin-left
				after:scale-x-0 after:bg-tx-expose
				after:transition-transform after:duration-300
				hover:after:scale-x-100"
			>
				Entrar
			</a>
		</span>
	{/snippet}
</AuthPanel>