import { getMovies, IGetMoviesProps } from "@/api/api";
import Helmet from "@/components/Helmet";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const { data, isLoading } = useQuery<IGetMoviesProps>(
    ["movie, popular"],
    getMovies
  ); // react-query 를 이용

  return (
    <div>
      <Helmet title="home" />
      {isLoading ? (
        <h4>Loading...</h4>
      ) : (
        data?.results.map((movie) => (
          <div key={movie.id}>
            <h4>{movie.original_title}</h4>
          </div>
        ))
      )}
    </div>
  );
}
