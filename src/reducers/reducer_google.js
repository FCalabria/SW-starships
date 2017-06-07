import { FETCH_PHOTOS } from '../actions/index.js';
import _ from 'lodash';

export default function (state = {photos: []}, action) {
  switch (action.type) {
    case FETCH_PHOTOS:
      return {
        photos: action.payload.data.items.map((photo) => photo.pagemap.cse_thumbnail[0])
      }
      break;

    default:
      break;
  }
  return state;
}