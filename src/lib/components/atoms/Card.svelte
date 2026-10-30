<!-- 
@component Card 

Reusable card component used to group and display content.

@prop children - Content rendered inside the card.
-->

<script lang="ts">
	import type { Snippet } from "svelte";

	let {
		children,
		class: className = ''
	}: {
		children: Snippet;
		class?: string;
	} = $props();
</script>

<div class="flex flex-col gap-5 bg-surface p-5 border border-border shadow-sm rounded-xl {className}">
	{@render children()}
</div>