import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {
  const userLoggedIn = ref(false);

  return { userLoggedIn };
});
