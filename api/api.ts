export const API_KEY = process.env.API_KEY;

export interface IGetMoviesProps {
  page: number;
  results: IMovieProps[];
  total_pages: number;
  total_results: number;
}

export interface IMovieProps {
  id: number;
  backdrop_path: string;
  original_title: string;
  overview: string;
  poster_path: string;
  title: string;
  vote_average: number;
  genre_ids: [number];
}

export function getMovies() {
  return fetch(`/api/movies`).then((response) => response.json());
}
