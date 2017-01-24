import { combineReducers } from 'redux'

export const STORAGE_KEY = 'todos-David-VUE/REDUX'

// PULL STATE from local storage using Storage Key
export const initstate = {
  todos: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
}

// BELOW REDUCERS
let todos = function todos(state = initstate, action) {
  switch (action.type) {
    case 'ADDED_TODO':
      console.log("THIS IS WHAT THE REDUCER RECEIVES: ", state, action)
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

export const reducer =  todos;

//If I had multiple reducers controling part of state
// combineReducers({
//   todos,
//   ... 
// })

