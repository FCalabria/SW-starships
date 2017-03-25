import { combineReducers } from 'redux';
import StarshipsReducer from './reducer_starships';

const rootReducer = combineReducers({
  starships: StarshipsReducer
});

export default rootReducer;
