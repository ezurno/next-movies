import Head from "next/head";
// Next.js 에서는 즉각적으로 해당하는 패키지를 사용 할 수 있음

interface IHelmet {
  title: String;
}

export default function Helmet({ title }: IHelmet) {
  return (
    <>
      <Head>
        <title>{`${title} | Next Movies`}</title>
      </Head>
    </>
  );
}
