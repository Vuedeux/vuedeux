import { STORAGE_KEY } from './mutations'
import { reduxStore } from './reduxstore'

export const localStoragePlugin = store => {
  store.subscribe((mutation, state) => {
    console.log("Plugin watch:", mutation, state)
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  })
}




