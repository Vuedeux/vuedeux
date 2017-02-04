export const STORAGE_KEY = 'FullVueXState';

export const state = {
  ...(JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')),
};

export const mutations = {
  // Native Vuex Mutations
};

