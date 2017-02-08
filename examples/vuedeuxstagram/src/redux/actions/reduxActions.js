/* eslint-disable */

import * as types from './reduxActionTypes.js';


export const increment_likes = index => ({ type: types.INCREMENT_LIKES, index });

export const add_comment = (postId, author, comment) => ({ type: types.ADD_COMMENT, postId, author, comment });

export const remove_comment = (postId, i) => ({ type: types.REMOVE_COMMENT, postId, i });