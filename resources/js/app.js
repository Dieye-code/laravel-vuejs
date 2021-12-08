require('./bootstrap');

import {createApp} from 'vue';

import application from './components/app.vue';

import Universites from './components/universites/liste.vue';
import Departements from './components/departements/liste.vue';

const app = createApp({});

app.component("universites",Universites)
app.component("departements",Departements)
app.component("app",application)

app.mount("#app")

// import { createApp } from "vue";

// import App from "./App.vue";

// createApp(App).mount("#app");