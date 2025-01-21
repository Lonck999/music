<script setup>
import { reactive, ref } from "vue";
const loginSchema = reactive({
  email: "required|email",
  password: "required|min:9|max:100",
});
const login_in_submission = ref(false);
const login_show_alert = ref(false);
const login_alert_variant = ref("bg-blue-500");
const login_alert_msg = ref("Please wait! Your account is being created.");

function login(values) {
  login_in_submission.value = true;
  login_show_alert.value = true;
  login_alert_variant.value = "bg-blue-500";
  login_alert_msg.value = "Please wait! We are logging you in.";

  login_alert_variant.value = "bg-green-500";
  login_alert_msg.value = "Success! You are now logged in.";
  console.log(values);
}
</script>
<template>
  <div
    class="text-white text-center font-bold p-4 mb-4"
    v-if="login_show_alert"
    :class="login_alert_variant"
  >
    <p>{{ login_alert_msg }}</p>
  </div>
  <!-- Login Form -->
  <vee-form :validation-schema="loginSchema" @submit="login">
    <!-- Email -->
    <div class="mb-3">
      <label class="inline-block mb-2">Email</label>
      <vee-field
        type="email"
        name="email"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Enter Email"
      />
      <VeeErrorMessage class="text-red-600" name="email" />
    </div>
    <!-- Password -->
    <div class="mb-3">
      <label class="inline-block mb-2">Password</label>
      <vee-field
        type="password"
        name="password"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Password"
      />
      <VeeErrorMessage class="text-red-600" name="password" />
    </div>
    <button
      type="submit"
      :disabled="login_in_submission"
      class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700"
    >
      Submit
    </button>
  </vee-form>
</template>
<style></style>
