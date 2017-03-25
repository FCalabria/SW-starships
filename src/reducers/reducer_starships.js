import {FETCH_STARSHIPS} from '../actions/index.js';

export default function(state = {count: 0, results: []}, action) {
  switch (action.type) {
    case FETCH_STARSHIPS:
      return action.payload.data;
      break;
  
    default:
      break;
  }
  return state;
}