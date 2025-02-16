
import { TMDB_API_KEY } from '$env/static/private';
export const load = async () => {
const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${TMDB_API_KEY}`
  }
};

const response = await fetch(url, options)
const data = await response.json();

return { movies: data.results    || [] };
}
