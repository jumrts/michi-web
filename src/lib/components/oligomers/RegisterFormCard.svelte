<!-- 
@component RegisterFormCard

Registration form card responsible for managing form state and validation.

Validates the user's name, email, and password using `registerSchema` and 
calls `onSuccess` with the validated data when the form is submitted successfully.

This component does not perform API requests directly. That responsibility belongs 
to the component consuming it through the `onSuccess` callback.

@prop errorMessage - Error message displayed below the form. 
@prop isLoading - Disables the submit button and displays its loading state. 
@prop onSuccess - Callback invoked with the validated registration data.
-->

<script lang="ts">
	import type { RegisterData } from "$lib/apps/auth/schemas";
	import { registerSchema } from "$lib/apps/auth/schemas";
	import TitleStack from "../atoms/TitleStack.svelte";
	import Button from "../atoms/Button.svelte";
	import { ArrowRight } from '@lucide/svelte';
	import Input from "../atoms/Input.svelte";
	import Card from "../atoms/Card.svelte";

	const primaryText: string = "Criar conta";
	const secondaryText: string = "Leva menos de um minuto. Depois você importa o que já tem na planilha.";
	const tertiaryText: string = "Primeira vez aqui";

	let name = $state('');
	let email = $state('');
	let password = $state('');

	let errors = $state<Record<string, string>>({});

	let { 
		errorMessage = "",
		isLoading = false,
		onSuccess 
	}: { 
		errorMessage?: string;
		isLoading?: boolean;
		onSuccess?: (
			data: RegisterData
		) => void 
	} = $props();


	/**
	 * Handles the registration form submission.
	 * 
	 * Validates the current form data and invokes `onSuccess`
	 * when validation succeeds.
	 * 
	 * @param event - The form submit event.
	 */
	function handleSubmit(event: SubmitEvent): void {
		event.preventDefault();

		const result = registerSchema.safeParse({ name, email, password });

		if (!result.success) {
			errors = result.error.issues.reduce<Record<string, string>>((acc, issue) => {
			const field = String(issue.path[0]); 
			if (!acc[field]) acc[field] = issue.message;
			return acc;
			}, {});
			return;
		}

		errors = {};
		onSuccess?.(result.data); 
	}

</script>

<Card class="w-full max-w-md">
	<form class="flex flex-col gap-5" onsubmit={handleSubmit} novalidate>
		
		<TitleStack
			primaryText={primaryText}
			primarySize="text-3xl"
			secondaryText={secondaryText}
			secondarySize="text-base"
			tertiaryText={tertiaryText}
			tertiarySize="text-base"
			gap="gap-2"
		/>

		<Input 
			title="Nome"
			name="name"
			placeholder="Seu nome"
			type="text"
			titleSize="text-2xl"
			minLength={3}
			maxLength={25}
			required={true}
			helperText="Como podemos te chamar?"
			error={errors.name}
			bind:value={name}
		/>

		<Input 
			title="E-mail"
			name="email"
			placeholder="voce@gmail.com"
			type="email"
			titleSize="text-2xl"
			minLength={3}
			maxLength={50}
			required={true}
			helperText="Informe seu e-mail."
			error={errors.email}
			bind:value={email}
		/>

		<Input 
			title="Senha"
			name="password"
			placeholder="********"
			type="password"
			titleSize="text-2xl"
			minLength={8}
			maxLength={16}
			required={true}
			helperText="Use pelo menos 8 caracteres."
			error={errors.password}
			bind:value={password}
		/>

		<Button 
		name="Criar conta" 
		type="submit"
		buttonColor="bg-ink text-bg"
		buttonSize="h-12"
		isLoading={isLoading}
		>
		{#snippet icon()}
			<ArrowRight size={18} />
		{/snippet}
		</Button>

		{#if errorMessage}
			<span class="text-sm text-ink">{errorMessage}</span>
		{/if}

	</form>	
</Card>