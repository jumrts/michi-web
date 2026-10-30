<!--
@component Checkbox

Checkbox component with optional label.

@prop checked - Whether the checkbox is checked or not. 
@prop label - Optional label displayed next to the checkbox.
-->

<script lang="ts">
    let { 
        checked = $bindable(false), 
        label = '' 
    }: {
        checked?: boolean;
        label?: string;
    } = $props();
</script>

<label class="flex cursor-pointer items-start gap-2 text-sm text-ink">
    <input type="checkbox" bind:checked class="peer sr-only" />
        <span
            class="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border border-border
                peer-checked:border-ink peer-checked:bg-ink"
        >
            {#if checked}
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3">
                <path d="M5 13l4 4L19 7" />
            </svg>
            {/if}
        </span>
    {label}
</label>