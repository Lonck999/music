import "./assets/base.css";
import "./assets/main.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import veeValidatePlugin from "./includes/validation";
import { auth } from "./includes/firebase";
let app = null;
auth.onAuthStateChanged((user) => {
  if (!app) {
    app = createApp(App);
    app.use(createPinia());
    app.use(router);
    app.use(veeValidatePlugin);
    app.mount("#app");
  }
});
