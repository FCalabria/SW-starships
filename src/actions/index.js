import axios from 'axios';

const ROOT_URL = 'http://swapi.co/api/starships/';

export const FETCH_STARSHIPS = 'FETCH_STARSHIPS';
export const FETCH_STARSHIP_DETAIL = 'FETCH_STARSHIP_DETAIL';

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