import NavBar from "@/components/NavBar";
import { AppProps } from "next/app";
import "../styles/globals.css";
import Layout from "@/components/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// App 에서만 global.css 에 접근 할 수 있어야 한다.

import { Roboto } from "next/font/google";
// next.js 는 google-font 가 내장 되어있음

const inter = Roboto({
  preload: false,
  weight: ["400"],
}); // 쓰는법은 공식문서 참고

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  // react-query 를 사용하기 위함
  return (
    <>
      <main className={inter.className}>
        <Layout>
          <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
          </QueryClientProvider>
        </Layout>
      </main>
    </>
  );
}
