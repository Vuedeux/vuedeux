import { combineReducers } from 'redux'

export const STORAGE_KEY = 'todos-David-VUE/REDUX'

// PULL STATE from local storage using Storage Key
export const initstate = {
  todos: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
}
console.log("INIT STATE: ", initstate)

// BELOW REDUCERS
let todos = function todos(state = initstate, action) {
  switch (action.type) {
    case 'ADDED_TODO':
      return Object.assign({}, state, {
        isPosting: false,
        items: initstate.todos.push({ text: action.text, done: false })
      })
    case 'ADDING_TODO':
      return Object.assign({}, state, {
        isPosting: true
      })
    case 'TOGGLE_TODO':
      return Object.assign({}, state, {
        items: state.todos.map((todo, i) => {
          if (i === action.index) {
            return {
              text: todo.text,
              done: !todo.done
            }
          }
          return todo
        })
      })
    default:
      return state
  }
}

export const reducer =  combineReducers({
  todos,
})

