import { createApp } from "vue";
import App from "./App.vue";
import Gtag from "vue-gtag";
import router from "./router";

import "@/assets/style.css";
import "@/assets/highlight.css";
import "@/registerServiceWorker";

const app = createApp(App);
app.use(router);

if (process.env.VUE_APP_G_TOKEN)
  app.use(Gtag, { config: { id: process.env.VUE_APP_G_TOKEN } }, router);

app.mount("#app");
