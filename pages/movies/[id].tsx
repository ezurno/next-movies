import Helmet from "@/components/Helmet";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";

export default function Detail({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
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
