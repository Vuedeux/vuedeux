export const STORAGE_KEY = 'todos-David-VUE/VUEX'



// for testing
// if (navigator.userAgent.indexOf('PhantomJS') > -1) {
//   window.localStorage.clear()
// }

// PULL STATE from local storage using Storage Key
export const state = {
  todos: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
}

const mutations = {
  // addTodo (state, { text }) {
  //   state.todos.push({
  //     text,
  //     done: false
  //   })
  // },

  deleteTodo (state, { todo }) {
    console.log("DELETE:", state, todo)
    state.todos.splice(state.todos.indexOf(todo), 1)
  },

  toggleTodo (state, { todo }) {
    todo.done = !todo.done
  },

  editTodo (state, { todo, value }) {
    todo.text = value
  },

  toggleAll (state, { done }) {
    state.todos.forEach((todo) => {
      todo.done = done
    })
  },

  clearCompleted (state) {
    state.todos = state.todos.filter(todo => !todo.done)
  }

}

export default mutations;
