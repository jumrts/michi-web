<!-- 
@component LoginFormCard

Login form card responsible for managing form state and validation.

Validates the user's name, email, and password using `loginSchema` and 
calls `onSuccess` with the validated data when the form is submitted successfully.

This component does not perform API requests directly. That responsibility belongs 
to the component consuming it through the `onSuccess` callback.

@prop errorMessage - Error message displayed below the form. 
@prop isLoading - Disables the submit button and displays its loading state. 
@prop onSuccess - Callback invoked with the validated registration data.
-->

<script lang="ts">
	import Card from "../atoms/Card.svelte";
	import TitleStack from "../atoms/TitleStack.svelte";
    import type { LoginData } from "$lib/apps/auth/schemas";
	import Input from "../atoms/Input.svelte";
	import Button from "../atoms/Button.svelte";
    import { ArrowRight } from '@lucide/svelte';
    import { loginSchema } from "$lib/apps/auth/schemas";
    import Checkbox from "../atoms/Checkbox.svelte";

	const primaryText: string = "Entrar";
	const secondaryText: string = "Seu painel abre direto no dia de hoje.";
	const tertiaryText: string = "Bem-vindo de volta";

	let email = $state('');
	let password = $state('');

	let { 
		errorMessage = "",
		isLoading = false,
		onSuccess 
	}: { 
		errorMessage?: string;
		isLoading?: boolean;
		onSuccess?: (
			data: LoginData
		) => void 
	} = $props();

    let errors = $state<Record<string, string>>({});
    let keepConected = $state(false);

	/**
	 * Handles the login form submission.
	 * 
	 * Validates the current form data and invokes `onSuccess`
	 * when validation succeeds.
	 * 
	 * @param event - The form submit event.
	 */
	function handleSubmit(event: SubmitEvent): void {
        event.preventDefault();

        const result = loginSchema.safeParse({ email, password });

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
            required={true}
            helperText="Informe sua senha."
            error={errors.password}
			minLength={8}
			maxLength={16}
            bind:value={password}
        />

        <!-- <div class="flex flex-row gap-2 justify-between">

            <Checkbox
                label="Continuar conectado"
                bind:checked={keepConected}
            />

            <span class="text-sm text-ink-disabled underline">
                Esqueci a senha
            </span>
        </div> -->

        <Button
            name="Entrar"
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