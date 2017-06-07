import axios from 'axios';

const ROOT_URL = 'http://swapi.co/api/starships/';
const GOOGLE_URL = 'https://www.googleapis.com/customsearch/v1'
const KEY = 'AIzaSyD9k-K9U9RWMzbCv3gTy_SFXZAWy1GjIsQ';
const CX = '010600706209839140863:tp5xiakrasi';

export const FETCH_STARSHIPS = 'FETCH_STARSHIPS';
export const FETCH_STARSHIP_DETAIL = 'FETCH_STARSHIP_DETAIL';
export const FETCH_PHOTOS = 'FETCH_PHOTOS';

export function fetchStarships(nextUrl = ROOT_URL) {
  const request = axios.get(nextUrl);
  return {
    type: FETCH_STARSHIPS,
    payload: request
  }
}

export function fetchStarshipDetail(id) {
  const request = axios.get(`${ROOT_URL}${id}/`);
  return {
    type: FETCH_STARSHIP_DETAIL,
    payload: request
  }
}

export function fetchPhotos(searchTerm) {
  const request = axios.get(`${GOOGLE_URL}?key=${KEY}&cx=${CX}&q=${searchTerm}&fileType=png+jpg`);
  return {
    type: FETCH_PHOTOS,
    payload: request
  }
}