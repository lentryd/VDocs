import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import project from "./ProjectPlugin";

import "./assets/style.css";
import "highlight.js/styles/github-dark.css";

createApp(App)
  .use(router)
  .use(project)
  .mount("#app");
