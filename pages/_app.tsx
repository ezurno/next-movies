import NavBar from "@/components/NavBar";
import { AppProps } from "next/app";
import "../styles/globals.css";
// App 에서만 global.css 에 접근 할 수 있어야 한다.

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <a>Test</a>
      <style jsx global>
        {`
          a {
            color: green;
          }
        `}
      </style>
    </>
  );
}
