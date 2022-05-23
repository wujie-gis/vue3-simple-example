import { createApp } from 'vue';
import '@/styles/index.scss';
// 引入 vue-router
import router from './router';
// 引入 pinia
import store from './store';
import App from './App.vue';

const meta = document.createElement('meta');
meta.name = 'naive-ui-style';
document.head.appendChild(meta);

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');
