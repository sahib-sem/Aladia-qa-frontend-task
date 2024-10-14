<template>
  <div
    class="h-screen w-screen bg-black flex justify-center items-center"
    data-cy="welcome-page"
  >
    <div class="flex flex-col items-center space-y-4">
      <h1 class="text-white text-4xl text-center" data-cy="welcome-message">
        Welcome to Aladia
      </h1>
      <Button
        label="Log out"
        :is-loading="appState.isLoading"
        :onclick="handleClick"
        data-cy="logout-button"
      />
    </div>
  </div>
</template>

<script setup>
import Button from "../atoms/Button.vue";
import { useAppState } from "../../store/store";

const appState = useAppState();

const handleClick = () => {
  appState.setLoading(true);
  setTimeout(() => {
    appState.setLoading(false);
    appState.logout();
  }, 1000);
};
</script>
