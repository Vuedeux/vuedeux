export const state = {
  todos: []
}

export const mutations = {
  addTodo (state, { text }) {
    state.todos.push({
      text,
      done: false
    })
  },
  deleteTodo (state, {todo}) {
    let index1 = state.todos.indexOf(todo)
    state.todos.splice(index1,1)
  },
  toggleTodo (state, todo) {
    let index1 = state.todos.indexOf(todo);
    if (state.todos[index1].done === false) {
      state.todos[index1].done = true;
    } else {
      state.todos[index1].done = false;
    }
  }

}
