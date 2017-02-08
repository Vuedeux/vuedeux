import * as types from './reduxactiontypes'

export const addTodo = text => ({ type: types.ADD_TODO, text })
export const deleteTodo = id => ({ type: types.DELETE_TODO, id })
export const editTodo = (id, text) => ({ type: types.EDIT_TODO, id, text })
export const completeTodo = id => ({ type: types.COMPLETE_TODO, id })
export const completeAll = () => ({ type: types.COMPLETE_ALL })
export const clearCompleted = () => ({ type: types.CLEAR_COMPLETED })

export function addingTodo (text) {
  return (dispatch, getState) => {
    // the following line is always an async ajax call, like:
    // return fetch().then().then(data => dispatch(addTodo(data)))
    // here we use setTimeout to fake one
    setTimeout(() => {
      dispatch(addTodo(text))
    }, 500)
  }
}