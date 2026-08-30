<!--
@component TitleStack

Stacked text component used to display a primary title with supporting text.


@prop primaryText - Main title text. 
@prop secondaryText - Supporting text displayed below the main title. 
@prop tertiaryText - Supporting text displayed above the main title. 
@prop side - Text alignment: "left", "right", or "center". 
@prop primarySize - Tailwind classes used to customize the primary text size. 
@prop secondarySize - Tailwind classes used to customize the secondary text size. 
@prop tertiarySize - Tailwind classes used to customize the tertiary text size. 
@prop gap - Tailwind classes used to control spacing between text elements. 
-->

<script lang="ts">
	let { 
		secondaryText = "",
		primaryText = "",
		side = "left",
		primarySize = "text-4xl",
		secondarySize = "text-xl",
		tertiaryText = "",
		tertiarySize	= "text-base",
		gap = "gap-2"
	}: {
		secondaryText?: string;
		primaryText?: string;
		side?: "left" | "right" | "center";
		primarySize?: string;
		secondarySize?: string;
		tertiaryText?: string;
		tertiarySize?: string;
		gap?: string;
	} = $props();

	const align = $derived({
		left: "text-left",
		center: "text-center",
		right: "text-right",
	}[side]);
</script>

<div class="flex flex-col {align} {gap}">

	<span class="text-ink-subtle font-thin {tertiarySize} tracking-wider uppercase">
		{tertiaryText}
	</span>

	<span class="text-ink font-display {primarySize}">
	{primaryText}
	</span>

	<span class="text-ink-muted {secondarySize}">
			{secondaryText}
	</span>

</div>