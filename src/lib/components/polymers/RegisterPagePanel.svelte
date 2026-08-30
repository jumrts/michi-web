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
	import RegisterFormCard from "../oligomers/RegisterFormCard.svelte";
	import MarketingPanel from "../monomers/MarketingPanel.svelte";
	import type { RegisterData } from "$lib/apps/auth/schemas";

	let { 
		errorMessage,
		isLoading,
		onSubmit
	}: { 
		errorMessage?: string;
		isLoading?: boolean;
		onSubmit?: (
			data: RegisterData
		) => void 
	} = $props();

</script>

<div class="grid min-h-screen w-full grid-cols-12 bg-bg">

	<div class="col-span-6 h-full border-r-1 border-border bg-surface-muted">
		<div class="h-full p-16">
			<MarketingPanel />
		</div>
	</div>

	<div class="col-span-6 flex h-full items-center justify-center">
		<RegisterFormCard 
			errorMessage={errorMessage}
			isLoading={isLoading}
			onSuccess={(data) => {
				onSubmit?.(data);
			}}
		/>
	</div>

</div>