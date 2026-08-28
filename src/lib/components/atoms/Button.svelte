<!--
@component Button

Reusable button component with optional loading state and icon.

@prop disabled - Disables the button when true. 
@prop name - Text displayed inside the button. 
@prop type - HTML button type: "button", "submit", or "reset". 
@prop buttonColor - Tailwind classes used to customize the button color. 
@prop buttonSize - Tailwind classes used to customize the button size. 
@prop isLoading - Displays the loading indicator when true. 
@prop icon - Optional snippet rendered next to the button text.
-->

<script lang="ts">
	import PointerLoading from "./PointerLoading.svelte";
	import type { Snippet } from "svelte";

	let {
		disabled = false,
		name = '',
		type = 'button',
		buttonColor = '',
		buttonSize = 'h-12',
		isLoading = false,
		icon,
	}: {
		disabled?: boolean;
		name?: string;
		type?: 'button' | 'submit' | 'reset';
		buttonColor?: string;
		buttonSize?: string;
		isLoading?: boolean;
		icon?: Snippet;
	} = $props();

</script>

<button
  class="{buttonColor} {buttonSize} flex flex-row items-center justify-center gap-3 rounded-lg border border-border bg-bg p-2 text-base hover:bg-[#651A31] cursor-pointer"
  {disabled}
  {type}
>
	{#if isLoading}
		<span class="flex items-center gap-1.5">
			<PointerLoading size={6} />
		</span>
	{:else}
		<span class="font-thin">{name}</span>
		{#if icon}
			{@render icon()}
		{/if}
	{/if}
</button>