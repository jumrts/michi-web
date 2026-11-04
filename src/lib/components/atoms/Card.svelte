<!-- 
@component Card 

Reusable card component used to group and display content.

@prop children - Content rendered inside the card.
-->

<script lang="ts">
	import type { Snippet } from "svelte";

	let {
		children,
		index,
		class: className = ''
	}: {
		children: Snippet;
		index?: string;
		class?: string;
	} = $props();
</script>

<div class="flex flex-col gap-5 bg-none p-5 border-t border-bd-focus/20 {className}">
    <span class="w-full text-right text-tx-muted font-mono text-xs tracking-[0.2rem] uppercase">
        {index}
    </span>

    {@render children()}
</div>