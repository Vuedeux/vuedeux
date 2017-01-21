import { combineReducers } from 'redux'


const defaultTodos = [
  {
    text: 'Butts',
    done: true
  },
  {
    text: 'Conquer',
    done: false
  },
  {
    text: 'Meet',
    done: false
  }
]


export const STORAGE_KEY = 'todos-David-VUE/REDUX'

// // PULL STATE from local storage using Storage Key
// export const state = {
//   todos: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
// }

// BELOW REDUCERS
let todos = function todos(state = {
  isPosting: false,
  todos: defaultTodos
}, action) {
  switch (action.type) {
    case 'ADDED_TODO':
      return Object.assign({}, state, {
        isPosting: false,
        items: state.todos.push({ text: action.text, done: false })
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

export default combineReducers({
  todos,
})

