import { createPinia } from 'pinia';
import { useUserStore } from './modules/userStore';
import piniaPluginPersist from 'pinia-plugin-persist';
const store = createPinia();

store.use(piniaPluginPersist);
export default store;

export { useUserStore };
