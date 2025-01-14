import {createApp} from 'vue'
import App from './App.vue'
import './styles/_global.scss';
import 'vue-tel-input/vue-tel-input.css';
import VueTelInput from "vue-tel-input";


const app = createApp(App);
// @ts-ignore
app.use(VueTelInput);
app.mount('#app')
