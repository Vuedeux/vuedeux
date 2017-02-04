/* eslint-disable */
function postComments(state = [], action) {
  switch(action.type){
    case 'ADD_COMMENT':
    //return the new state with the new comments
    return [...state, {
      user: action.author,
      text: action.comment
    }];
    case 'REMOVE_COMMENT':
    //we return the new state without the deleted comment
      return [
        //from start to one we wont to delete
        ...state.slice(0, action.i),
        /// after the deleted one, to the end
        ...state.slice(action.i + 1)
      ]
    default:
      return state;
  }
	return state;
}

function comments(state = [], action) {
  if(typeof action.postId !== 'undefined')
    return {
      //take current state
      ...state,
      //overwrite this post with a new one
      [action.postId]: postComments(state[action.postId], action)
    }
	return state;
}

export default comments;
