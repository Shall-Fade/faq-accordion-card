import { createApp } from "vue";
import App from "./App.vue";
import BaseFaqCard from "./components/base/BaseFaqCard.vue";

const app = createApp(App);

app.component("BaseFaqCard", BaseFaqCard);

app.mount("#app");
