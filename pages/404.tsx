import Helmet from "@/components/Helmet";
import css from "styled-jsx/css";

const styled = css`
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 70vh;
    width: 100%;
  }
`;

export default function NotFound() {
  return (
    <>
      <Helmet title={"404:Not-Found"} />
      <div className="container">
        <h1>404 Error ⛔</h1>
        <h3>Cannot found movies. Please Check Your URL.</h3>
      </div>

      <style jsx>{styled}</style>
    </>
  );
}
