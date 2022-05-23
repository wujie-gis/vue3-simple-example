import { createPinia } from 'pinia';
import { useUserStore } from './modules/userStore';
const store = createPinia();

export default store;
export { useUserStore };
