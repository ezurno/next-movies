import { getMovies, IGetMoviesProps } from "@/api/api";
import Helmet from "@/components/Helmet";
import { useQuery } from "@tanstack/react-query";
import css from "styled-jsx/css";

const styled = css`
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 20px;
    gap: 20px;
  }
  .movie img {
    max-width: 100%;
    border-radius: 12px;
    transition: transform 0.2s ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  }
  .movie:hover img {
    transform: scale(1.05) translateY(-10px);
  }
  .movie h4 {
    font-size: 18px;
    text-align: center;
  }
`;

export default function Home() {
  const { data, isLoading } = useQuery<IGetMoviesProps>(
    ["movie, popular"],
    getMovies
  ); // react-query 를 이용

  return (
    <div className="container">
      <Helmet title="home" />
      {isLoading ? (
        <h4>Loading...</h4>
      ) : (
        data?.results.map((movie) => (
          <div className="movie" key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
            <h4>{movie.original_title}</h4>
          </div>
        ))
      )}

      <style jsx>{styled}</style>
    </div>
  );
}
