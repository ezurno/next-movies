import { getMovies, IGetMoviesProps, IMovieProps } from "@/api/api";
import Helmet from "@/components/Helmet";
import { useQuery } from "@tanstack/react-query";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import css from "styled-jsx/css";

const styled = css`
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 20px;
    grid-gap: 20px;
  }

  .movie {
    cursor: pointer;
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

export default function Home({
  results,
}: InferGetServerSidePropsType<GetServerSideProps>) {
  // const { data, isLoading } = useQuery<IGetMoviesProps>(
  //   ["movie, popular"],
  //   getMovies
  // ); // react-query 를 이용

  return (
    <div className="container">
      <Helmet title="home" />

      {results?.map((movie: IMovieProps) => (
        <div className="movie" key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          <h4>{movie.original_title}</h4>
        </div>
      ))}

      <style jsx>{styled}</style>
    </div>
  );
}

export async function getServerSideProps({}: GetServerSideProps) {
  // 해당 function 은 name 규칙이 정해져있으므로 다른 이름 X
  // 해당함수를 사용하면 client 가 아닌 server 내에서만 작동 (Hiding 가능)

  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();

  return {
    props: {
      results,
    },
  };
}
