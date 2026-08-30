<!--
@component PointerLoading

Animated loading indicator composed of three pulsing dots.  

@prop size - Diameter of each loading dot in pixels.
-->

<script lang="ts">
	let { 
		size = 6 
		}: { 
			size?: number 
		} = $props();
</script>

<span class="flex items-center gap-1.5">
	{#each [0, 1, 2] as i}
		<span
			class="animate-pulse rounded-full bg-current"
			style="width: {size}px; height: {size}px; animation-delay: {i * 150}ms;"
		></span>
	{/each}
</span>