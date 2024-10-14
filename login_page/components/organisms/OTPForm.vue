<template>
  <div class="bg-black rounded-lg p-5 text-white max-w-md my-4 mx-auto text-[13px]">
    <div class="flex flex-col items-center px-6 pt-8">
      <img
        src="/assets/img/aladia.png"
        class="mb-2 h-24 w-24 rounded object-cover"
      />
      <div class="mb-4 text-lg font-semibold">{{ userName }}</div>
      <div class="mb-8 text-white/70">Thanks for joining Aladia.</div>

      <div class="mb-20 text-center text-white/70">
        Please enter below the 6-digit code we sent you through your
        registration e-mail:
      </div>

      <OTPInputGroup />
      <div class="mb-24 flex w-full justify-center">
        <TextLink text="You didn't receive any mail?" />
      </div>

      <Button
        data-cy="submit-email-button"
        label="Enter"
        :is-loading="appState.isLoading"
        :is-disabled="false"
        @click="handleClick"
      />
    </div>
  </div>
</template>

<script setup>
import OTPInputGroup from "../molecules/OTPInputGroup.vue";
import TextLink from "../atoms/TextLink.vue";
import Button from "../atoms/Button.vue";

import { useAppState } from "../../store/store";
const appState = useAppState();

const handleClick = () => {
  appState.setLoading(true);

  setTimeout(() => {
    appState.setLoading(false);
    appState.login();
  }, 2000);
};  

const userName = appState.currentName + " " + appState.currentSurName;
</script>
