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


<div class="grid min-h-screen w-full grid-cols-12">

	<div
		class="relative col-span-8 h-full bg-surface bg-cover bg-center"
		style="background-image: url('https://res.cloudinary.com/xkqwrj8z/image/upload/v1793826963/ab6cf498-23ed-4f54-abad-b5f136c8f4b6.png')"
	>
		<div class="h-full p-16">
			<MarketingPanel />
		</div>
	</div>


    <div class="col-span-4 bg-background flex flex-col gap-4 h-full items-center justify-center">
        <LoginFormCard
            errorMessage={errorMessage}
            isLoading={isLoading}
            onSuccess={(data) => {
                onSubmit?.(data);
            }}
        />
		<span class="text-base text-tx-secondary">
			Ainda não tem conta? 
			<a 
				href="/auth/register" 
				class="relative w-fit cursor-pointer text-tx-expose
					after:absolute after:bottom-0 after:left-0
					after:h-px after:w-full after:origin-left
					after:scale-x-0 after:bg-tx-expose
					after:transition-transform after:duration-300
					hover:after:scale-x-100">
				Criar uma agora
			</a>
		</span>
    </div>
</div>