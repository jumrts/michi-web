<!--
@component LoginPagePanel

Layout component for the login page.

Combines the marketing section with the registration form and 
forwards validated form data through the `onSubmit` callback.

@prop errorMessage - Error message displayed in the registration form. 
@prop isLoading - Controls the loading state of the registration form. 
@prop onSubmit - Callback invoked with the validated registration data. 
-->

<script lang="ts">;
    import MarketingPanel from "../monomers/MarketingPanel.svelte";
	import type { LoginData } from "$lib/apps/auth/schemas";
	import LoginFormCard from "../oligomers/LoginFormCard.svelte";

	let { 
		errorMessage,
		isLoading,
		onSubmit
	}: { 
		errorMessage?: string;
		isLoading?: boolean;
		onSubmit?: (
			data: LoginData
		) => void 
	} = $props();

</script>


<div class="grid min-h-screen w-full grid-cols-12 bg-bg">

	<div class="col-span-6 h-full border-r-1 border-border bg-surface-muted">
		<div class="h-full p-16">
			<MarketingPanel />
		</div>
	</div>


    <div class="col-span-6 flex flex-col gap-4 h-full items-center justify-center">
        <LoginFormCard
            errorMessage={errorMessage}
            isLoading={isLoading}
            onSuccess={(data) => {
                onSubmit?.(data);
            }}
        />
		<span class="text-base text-ink-disabled">
			Ainda não tem conta? 
			<a href="/auth/register" class="text-[#641531] underline hover:opacity-80">
				Criar uma agora
			</a>
		</span>
    </div>
</div>