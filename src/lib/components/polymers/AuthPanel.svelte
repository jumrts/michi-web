<!--
@component AuthPanel

Base layout for authentication pages.

Renders the marketing section on the left and a slot for the form on the right.
The form content drops into the screen with a bounce animation.

@prop children - Main content (the form card).
@prop footer - Optional content below the form (e.g. link to another auth page).
-->

<script lang="ts">
	import type { Snippet } from "svelte";
	import { fly } from "svelte/transition";
	import { cubicOut } from "svelte/easing";
	import MarketingPanel from "../monomers/MarketingPanel.svelte";

	let {
		children,
		footer
	}: {
		children: Snippet;
		footer?: Snippet;
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

    <div class="col-span-4 flex h-full flex-col items-center justify-center overflow-hidden bg-background px-8">
        <div
            class="flex w-full max-w-md flex-col items-center gap-4"
            in:fly={{ y: -30, duration: 700, opacity: 1, easing: cubicOut}}
        >
            {@render children()}
            {@render footer?.()}
        </div>
    </div>
</div>