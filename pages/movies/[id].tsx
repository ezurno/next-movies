import Helmet from "@/components/Helmet";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";

// type DetailParams = [string, string] | [];
// // server-side-rendering 을 하면 배열이 없을 경우가 생기므로 type 을 빈 배열도 추가해 준다.

export default function Detail({ data }: any) {
  return (
    <div>
      <Helmet title={data.title} />
      <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} />

      <h4>{data.title}</h4>
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
