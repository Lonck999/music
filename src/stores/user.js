import { defineStore } from "pinia";
import { auth, usersCollection } from "@/includes/firebase";
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {
  const userLoggedIn = ref(false);
  // 這是註冊使用者
  async function register(values) {
    const userCred = await auth.createUserWithEmailAndPassword(
      values.email,
      values.password
    );
    // 這是新增使用者資料
    await usersCollection.doc(userCred.user.uid).set({
      name: values.name,
      email: values.email,
      age: values.age,
      country: values.country,
    });
    // 這是更新使用者名稱
    await userCred.user.updateProfile({
      displayName: values.name,
    });
    userLoggedIn.value = true;
    console.log(userCred);
  }
  return { userLoggedIn, register };
});
