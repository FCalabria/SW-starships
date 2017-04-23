import { FETCH_STARSHIPS } from '../actions/index.js';
import { FETCH_STARSHIP_DETAIL } from '../actions/index.js';
import _ from 'lodash';

export default function (state = { next: undefined, results: [], detail: {} }, action) {
  switch (action.type) {
    case FETCH_STARSHIPS:
      return {
        next: action.payload.data.next,
        results: [...state.results, ...action.payload.data.results],
        detail: {}
      };
      break;

    case FETCH_STARSHIP_DETAIL:
      return {
        next: state.next,
        results: [...state.results],
        detail: action.payload.data
      }
      break;

    default:
      break;
  }
  return state;
}