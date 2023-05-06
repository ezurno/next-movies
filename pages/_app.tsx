import NavBar from "@/components/NavBar";
import { AppProps } from "next/app";
import "../styles/globals.css";
import Layout from "@/components/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// App 에서만 global.css 에 접근 할 수 있어야 한다.

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  // react-query 를 사용하기 위함
  return (
    <>
      <Layout>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </Layout>
    </>
  );
}
