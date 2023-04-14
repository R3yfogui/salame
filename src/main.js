import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'

import './assets/main.css'

import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

createApp(App).mount('#app')



const app = createApp();

const options = {
    // You can set your default options here
};

app.use(Toast, options);

