import { combineReducers } from 'redux'
import { ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO, COMPLETE_ALL, CLEAR_COMPLETED } from '../actions/reduxactiontypes'

export const STORAGE_KEY = 'todos-David-VUE/REDUX'

export const todoArray = JSON.parse(window.localStorage.getItem(STORAGE_KEY)) || [];


export default function todos(todos = todoArray , action) {
  // console.log("3. 4. Mutation triggered dispatch to reducer with the following state and action", state, action)
  switch (action.type) {
    case ADD_TODO:
      return [
        {
          id: todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          done: false,
          text: action.text
        },
        ...todos
      ]

    case DELETE_TODO:
      return todos.filter(todo =>
        todo.id !== action.todo.id
      )

    case EDIT_TODO:
      return todos.map(todo =>
        todo.id === action.todo.id ?
          { ...todo, text: action.value } :
          todo
      )

    case COMPLETE_TODO:
      return todos.map(todo => {
        return todo.id === action.todo.id ?{ ...todo, done: !todo.done } : todo
      })

    case COMPLETE_ALL:
      const areAllMarked = todos.every(todo => todo.done)
      return todos.map(todo => ({
        ...todo,
        done: !areAllMarked
      }))

    case CLEAR_COMPLETED:
      return todos.filter(todo => todo.done === false)

    default:
      return todos
  }
}


  export const reducer = function todoApp(state = {}, action) {
    return {
      todos: todos(state.todos, action)
    }
  }

// You could also use combineReducers Redux helper function to do same as above
//  export const reducer =  combineReducers({
//    todos
//  })


