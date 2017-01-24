import { STORAGE_KEY } from './mutations'


export const localStoragePlugin = store => {
  store.subscribe((mutation, { todos }) => {
    console.log("Plugin watch:", mutation)
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  })
}

export const createModule = store => {
  console.log("bean?")
  store.registerModule('bean', {
    state: {},
    mutations: {},
  });
};




