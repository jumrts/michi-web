<!-- 
@component Input 

Reusable input component with validation feedback and password visibility control. 
@prop placeholder - Placeholder text displayed inside the input. 
@prop type - HTML input type: "text", "email", "password", or "number". 
@prop title - Label displayed above the input. 
@prop titleSize - Tailwind classes used to customize the label size. 
@prop required - Defines whether the input is required. 
@prop name - Input name and identifier. 
@prop minLength - Minimum number of characters allowed. 
@prop maxLength - Maximum number of characters allowed. 
@prop helperText - Helper text displayed below the input. 
@prop error - Validation error message displayed below the input. 
@prop value - Bindable input value. 
-->

<script lang="ts">
  let { 
		placeholder = "", 
		type = "text",
		title = "",
		titleSize = "h-10",
		required = true,
		name = "Nome",
		minLength = 0,
		maxLength = 10,
    helperText = "",
    error = "",
		value = $bindable('') 
	}: {
    placeholder: string;
    type: "text" | "email" | "password" | "number";
    title: string;
    titleSize?: string;
    required?: boolean;
    name: string;
		minLength?: number;
		maxLength?: number;
    helperText?: string;
    error?: string;
    value: string;
  } = $props();

  let showPassword = $state(false);

  const isPasswordField = type === 'password';
  const inputType = $derived(isPasswordField ? (showPassword ? 'text' : 'password') : type);
</script>

<div class="flex flex-col gap-1">

	<label for={name} class="text-ink-subtle font-thin text-base tracking-wider uppercase {titleSize}">
		{title}
	</label>
	
  <div class="relative w-full">
    <input
      id={name}
      name={name}
      type={inputType}
      required={required}
      placeholder={placeholder}
			minlength={minLength}
			maxlength={maxLength}
      bind:value
			class="w-full rounded-lg border border-border bg-transparent p-2 text-base text-ink-muted
						hover:border-ink focus:border-ink focus:outline-none"    
			/>

    {#if isPasswordField}
      <button
        type="button"
        onclick={() => (showPassword = !showPassword)}
        class="absolute right-2 top-1/2 -translate-y-1/2 text-ink-subtle"
        aria-label={showPassword ? 'Esconder senha' : 'Mostrar senha'}
      >
        <div class="cursor-pointer">
          {#if showPassword}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
              <line x1="1" y1="1" x2="23" y2="23" />
            </svg>
          {:else}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          {/if}
        </div>
      </button>
    {/if}
  </div>

  {#if error}
    <span class="text-sm text-[#651A31]">{error}</span>
  {:else if helperText}
    <span class="text-[#651A31] text-sm">{helperText}</span>
  {/if}
</div>
