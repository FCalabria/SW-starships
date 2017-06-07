import { combineReducers } from 'redux';
import StarshipsReducer from './reducer_starships';
import GoogleReducer from './reducer_google';

const rootReducer = combineReducers({
  starships: StarshipsReducer,
  googleData: GoogleReducer
});

export default rootReducer;
