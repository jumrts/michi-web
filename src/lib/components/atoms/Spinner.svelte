<!--
@component Spinner

Animated circular loading indicator.

@prop size - Width and height of the spinner in pixels.
@prop stroke - Stroke width of the spinner.	
-->
<script lang="ts">
	let { 
		size = 20, 
		stroke = 1.5 
		}: { 
			size?: number; 
			stroke?: number 
		} = $props();
</script>

<svg
	class="animate-spin"
	width={size}
	height={size}
	viewBox="0 0 24 24"
	fill="none"
>
	<circle class="opacity-20" cx="12" cy="12" r="10" stroke="currentColor" stroke-width={stroke} />
	<path
		class="opacity-90"
		d="M12 2a10 10 0 0 1 10 10"
		stroke="currentColor"
		stroke-width={stroke}
		stroke-linecap="round"
		fill="none"
	/>
</svg>