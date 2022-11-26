import { createApp } from "vue";
// import { createPinia } from "pinia";
import Vuelidate from 'vuelidate'
import App from "./App.vue";
// import router from "./router";

import "/src/assets/style/main.css";

const app = createApp(App);

// app.use(createPinia());
// app.use(router);

app.mount("#app").use(Validate);
