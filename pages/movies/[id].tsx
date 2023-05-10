import Helmet from "@/components/Helmet";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";

export default function Detail({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(data);
  return (
    <div>
      <Helmet title={data.title} />
      <div className="container">
        <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} />
        <h1>
          {data.title} ({data.runtime} MIN)
        </h1>
        <h4>개봉일 : {data.release_date}</h4>
        <h4>평점 : {data.vote_average.toFixed(2)}점</h4>
        <p>{data.overview}</p>
      </div>

      <style jsx>
        {`
          .container {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          img {
            margin: 0 auto;
            border-radius: 12px;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
            height: 500px;
          }

          h1,
          h4 {
            text-align: center;
          }
          h4 {
            font-size: 18px;
          }
          p {
            width: 500px;
            text-align: center;
          }
        `}
      </style>
    </div>
  );
}
export async function getServerSideProps(context: any) {
  console.log(`CONTEXT: !!!`);
  console.log(context.query);
  const { id } = context.query;
  console.log(id);
  const data = await (
    await fetch(`http://localhost:3000/api/movies/${id}`)
  ).json();
  return {
    props: { data },
  };
}
