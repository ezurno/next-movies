import Helmet from "@/components/Helmet";
import css from "styled-jsx/css";

const styled = css`
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 30px 0px;

    height: auto;
    width: 100%;
  }

  .container img {
    height: 100px;
    width: 100%;
  }
`;

export default function about() {
  return (
    <>
      <Helmet title="about" />
      <div className="container">
        <h1>🛠️ Tools 🛠️</h1>
        <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white" />
        <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white" />
        <img src="https://img.shields.io/badge/ReactQuery-FF4154?style=for-the-badge&logo=React-Query&logoColor=white" />
        <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white" />
      </div>

      <style jsx>{styled}</style>
    </>
  );
}
