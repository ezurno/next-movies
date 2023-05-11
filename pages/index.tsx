import { getMovies, IGetMoviesProps, IMovieProps } from "@/api/api";
import Helmet from "@/components/Helmet";
import { useQuery } from "@tanstack/react-query";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Link from "next/link";
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
    background-color: darkgrey;
    border-radius: 15px;
    transition: transform 0.2s ease-in-out;
  }

  .movie img {
    max-width: 100%;
    border-radius: 12px 12px 0px 0px;
    /* transition: transform 0.2s ease-in-out; */
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  }
  .movie:hover {
    transform: scale(1.05) translateY(-10px);
  }

  .movieTitle {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 75px;
  }

  .movieTitle h4 {
    font-size: 18px;
    text-align: center;
    margin: 0;
    color: white;
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
        <Link
          href={{
            pathname: `/movies/${movie.id}`,
            query: {
              title: movie.original_title,
            },
          }}
          as={`/movies/${movie.id}`}
          key={movie.id}
        >
          <div className="movie">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
            <div className="movieTitle">
              <h4>{movie.original_title}</h4>
            </div>
          </div>
        </Link>
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
