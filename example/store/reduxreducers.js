import { combineReducers } from 'redux'
import { ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO, COMPLETE_ALL, CLEAR_COMPLETED } from '../actions/reduxactiontypes'

export const STORAGE_KEY = 'todos-David-VUE/REDUX'

export const initstate = JSON.parse(window.localStorage.getItem(STORAGE_KEY)) || {todos:[]};


export default function todos(state = initstate , action) {
  console.log("3. 4. Mutation triggered dispatch to reducer with the following state and action", state, action)
  switch (action.type) {
    case ADD_TODO:
      return {todos:[
        {
          id: state.todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          done: false,
          text: action.text
        },
        ...state.todos
      ]}

    case DELETE_TODO:
      return {todos: state.todos.filter(todo =>
        todo.id !== action.todo.id
      )}

    case EDIT_TODO:
      return {todos: state.todos.map(todo =>
        todo.id === action.todo.id ?
          { ...todo, text: action.text } :
          todo
      )}

    case COMPLETE_TODO:
      return {todos: state.todos.map(todo => {
        return todo.id === action.todo.id ?{ ...todo, done: "working?" } : todo
      })}

    case COMPLETE_ALL:
      const areAllMarked = state.todos.every(todo => todo.done)
      return {todos: state.todos.map(todo => ({
        ...todo,
        done: !areAllMarked
      }))}

    case CLEAR_COMPLETED:
      return {todos:state.todos.filter(todo => todo.done === false)}

    default:
      return state
  }
}


export const reducer =  todos;

/* If one had multiple reducers controling subsections of state you could use combineReducers
  export const reducer =  combineReducers({
    todos
  })
*/

