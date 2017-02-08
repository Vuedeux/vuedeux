import { STORAGE_KEY } from './mutations';

export const localStoragePlugin = (store) => {
  store.subscribe((mutation, state) => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  });
};

