import { combineReducers } from 'redux'
import { ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO, COMPLETE_ALL, CLEAR_COMPLETED } from './reduxactiontypes'

export const STORAGE_KEY = 'todos-David-VUE/REDUX'

// PULL STATE from local storage using Storage Key

// export const initstate = {
//   todos: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
// }

export const initstate = {
  todos: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
}

export default function todos(state = initstate , action) {
  console.log("State within Switch", state)
  switch (action.type) {
    case ADD_TODO:
      return [
        {
          id: state.todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          text: action.text
        },
        ...state.todos
      ]

    case DELETE_TODO:
      return state.todos.filter(todo =>
        todo.id !== action.id
      )

    case EDIT_TODO:
      return state.todos.map(todo =>
        todo.id === action.id ?
          { ...todo, text: action.text } :
          todo
      )

    case COMPLETE_TODO:
      return state.todos.map(todo =>
        todo.id === action.id ?
          { ...todo, completed: !todo.completed } :
          todo
      )

    case COMPLETE_ALL:
      const areAllMarked = state.todos.every(todo => todo.completed)
      return state.todos.map(todo => ({
        ...todo,
        completed: !areAllMarked
      }))

    case CLEAR_COMPLETED:
      return state.todos.filter(todo => todo.completed === false)

    default:
      return state
  }
}


// export const reducer =  todos;

//If I had multiple reducers controling part of state
export const reducer =  combineReducers({
  todos
})


