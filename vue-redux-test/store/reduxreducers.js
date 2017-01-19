import { combineReducers } from 'redux'

const defaultTodos = [
  {
    text: 'Rule the web',
    done: true
  },
  {
    text: 'Conquer the world',
    done: false
  },
  {
    text: 'Meet a girl',
    done: false
  }
]

// BELOW REDUCERS
let todos = function todos(state = {
  isPosting: false,
  items: defaultTodos
}, action) {
  switch (action.type) {
    case 'ADDED_TODO':
      return Object.assign({}, state, {
        isPosting: false,
        items: state.items.concat([{ text: action.text, done: false }])
      })
    case 'ADDING_TODO':
      return Object.assign({}, state, {
        isPosting: true
      })
    case 'TOGGLE_TODO':
      return Object.assign({}, state, {
        items: state.items.map((todo, i) => {
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

