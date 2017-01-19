// create actionCreators yourself or use `redux-actions`
export function addTodo(payload) {
  return {type: 'ADD_TODO', payload}
}
export function toggleTodo(payload) {
  return {type: 'TOGGLE_TODO', payload}
}