import Helmet from "@/components/Helmet";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import css from "styled-jsx/css";

interface IGenresProps {
  id: number;
  name: string;
}

const styled = css`
  .container {
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  img {
    margin: 0 auto;
    border-radius: 12px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 12px;
    height: 500px;
    margin-bottom: 10px;
  }

  h1,
  h4 {
    margin: 15px;
    text-align: center;
  }
  h4 {
    font-size: 18px;
  }
  p {
    width: 400px;
    text-align: center;
  }

  .genresBox {
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .genresBox span {
    background-color: darkgrey;

    border: 1px solid lightgrey;
    border-radius: 15px;
  }

  .genresBox span h5 {
    margin: 0;
    padding: 10px 15px;
    color: white;
  }
`;

export default function Detail({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(data);
  return (
    <div>
      <Helmet title={data.title} />
      <div className="container">
        <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} />
        <h1>{data.title}</h1>
        <div className="genresBox">
          {data.genres.map((value: IGenresProps) => (
            <span key={value.id}>
              <h5>{value.name}</h5>
            </span>
          ))}
        </div>
        <div
          style={{
            display: "flex",
          }}
        >
          <h4>Open : {data.release_date}🗓️</h4>
          <h4>Score : {data.vote_average.toFixed(2)}⭐</h4>
          <h4>Runtime : {data.runtime}🕑</h4>
        </div>

        <p>{data.overview}</p>
      </div>

      <style jsx>{styled}</style>
    </div>
  );
}
export async function getServerSideProps(context: any) {
  // console.log(`CONTEXT: !!!`);
  // console.log(context.query);
  const { id } = context.query;
  console.log(id);
  const data = await (
    await fetch(`http://localhost:3000/api/movies/${id}`)
  ).json();
  return {
    props: { data },
  };
}
