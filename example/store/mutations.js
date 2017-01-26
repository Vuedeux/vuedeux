export const STORAGE_KEY = 'FullVueXState'

export const state = {
  todos: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
}

export const mutations = {

// YOUR VUEX MUTATIONS

}

