import { defineStore } from "pinia";
import { auth, usersCollection } from "@/includes/firebase";
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {
  const userLoggedIn = ref(false);
  let userCred = null;
  async function register(values) {
    userCred = await auth.createUserWithEmailAndPassword(
      values.email,
      values.password
    );
    await usersCollection.add({
      name: values.name,
      email: values.email,
      age: values.age,
      country: values.country,
    });
    userLoggedIn = true;
    console.log(userCred);
  }
  return { userLoggedIn, register };
});
