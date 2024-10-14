<template>
  
   <LoginForm v-if="isEmailStep"  />
  <LoginForm v-else-if="isPasswordStep" :isPasswordField="true" />
  <PasswordRecovery v-else-if="isPasswordRecoveryStep" />
  <OTPForm v-else-if="isOTPstep" />
  <SignUPForm  v-else-if="isSignupStep"/>
  <PasswordRecovery v-else-if="isPasswordSetStep" :showPasswordRecoverySection="false" />

  <WelcomeScreen v-else /> 

  



</template>

<script setup>
import "@fortawesome/fontawesome-free/css/all.css";
import LoginForm from "~/components/organisms/LoginForm.vue";
import PasswordRecovery from "~/components/organisms/PasswordRecovery.vue";
import OTPForm from "~/components/organisms/OTPForm.vue";
import WelcomeScreen from "~/components/organisms/WelcomeScreen.vue";
import SignUPForm from "~/components/organisms/SignUPForm.vue";

import { useAppState } from "~/store/store";
import { computed } from "vue";

const appState = useAppState();


const isEmailStep = computed(() => appState.pageNumber === 0);
const isPasswordStep = computed(() => appState.pageNumber === 1);
const isPasswordRecoveryStep = computed(() => appState.pageNumber === 2);
const isSignupStep = computed(() => appState.pageNumber === 3);
const isOTPstep = computed(() => appState.pageNumber === 4);
const isPasswordSetStep = computed(() => appState.pageNumber === 5);



</script>
