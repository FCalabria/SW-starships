import {FETCH_STARSHIPS} from '../actions/index.js';

export default function(state = {next: undefined, results: []}, action) {
  switch (action.type) {
    case FETCH_STARSHIPS:
      return {
        next: action.payload.data.next,
        results: [...state.results, ...action.payload.data.results]
      };
      break;
  
    default:
      break;
  }
  return state;
}