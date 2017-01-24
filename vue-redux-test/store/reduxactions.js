const ADD_TODO = 'ADD_TODO'
const ADDED_TODO = 'ADDED_TODO'
const ADDING_TODO = 'ADDING_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'

// ACTION CREATORS FOR THE 4 ABOVE ACTION TYPES

export function addedTodo (text) {
  return {
    type: ADDED_TODO,
    text
  }
}

export function addingTodo () {
  return {
    type: ADDING_TODO
  }
}

export function toggleTodo (index) {
  return {
    type: TOGGLE_TODO,
    index
  }
}


// THIS IS A THUNK
// export function addTodo (text) {
//   // you can dispatch a ADDING_TODO action here
//   return (dispatch, getState) => {
//     dispatch(addingTodo())
//     dispatch(addedTodo(text))
//     // the following line is always an async ajax call, like:
//     // return fetch().then().then(data => dispatch(addedTodo(data)))
//     // here we use setTimeout to fake one
//     setTimeout(() => {
//       // dispatch(addedTodo(text))
//       console.log("I'm dispatching")
//     }, 1000)
//   }
// }
