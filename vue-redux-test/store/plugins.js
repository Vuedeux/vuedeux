import { STORAGE_KEY } from './mutations'


const localStoragePlugin = store => {
  store.subscribe((mutation, { todos }) => {
    console.log("Plugin watch:", mutation)
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  })
}



export default [localStoragePlugin]
