<!--
@component RegisterPage

Registration page container responsible for coordinating the registration flow.

Handles the loading and error states and delegates the visual structure to `RegisterPagePanel`.

The registration request is performed through `AuthRepository`. 
-->

<script lang="ts">
  import { AuthRepository } from "$lib/apps/auth/repository/repository";
	import RegisterPagePanel from "../polymers/RegisterPagePanel.svelte";
  import { goto } from '$app/navigation';

  const repo = new AuthRepository();

  let errorMessage: string = $state('');
  let isLoading: boolean = $state(false);
</script>

<RegisterPagePanel
  errorMessage={errorMessage}
  isLoading={isLoading}
  onSubmit={async (data) => {
    isLoading = true;
    try {
        await repo.register(data);
        goto(`/auth/login`);
    } catch (error) {
      errorMessage =
        error instanceof Error
          ? error.message
          : "Erro ao registrar o usuário";
    } finally {
        isLoading = false;
        errorMessage = "";
    }
  }}
/>