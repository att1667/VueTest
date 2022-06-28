import { createApp } from 'vue'
import { initializeApp } from "firebase/app";
import App from './App.vue'
import router from './router'
import axios from "axios";

const firebaseConfig = {
    apiKey: "AIzaSyDZlFQ_8bb_5yBabfboqPYB0rLuYSj7L7g",
    authDomain: "vue-firebase-basic-eac7f.firebaseapp.com",
    projectId: "vue-firebase-basic-eac7f",
    storageBucket: "vue-firebase-basic-eac7f.appspot.com",
    messagingSenderId: "319819097897",
    appId: "1:319819097897:web:26207333b8b4c5e46b3938"
};

initializeApp(firebaseConfig);
const app = createApp(App);
app.config.globalProperties$http = axios;
app.use(router)
app.mount('#app')