import axios from 'axios';

const ROOT_URL = 'http://swapi.co/api/starships/';

export const FETCH_STARSHIPS = 'FETCH_STARSHIPS';

export function fetchStarships(city) {
  const url = ROOT_URL;
  const request = axios.get(url);
  return {
    type: FETCH_STARSHIPS,
    payload: request
  }
}