import Link from "next/link";
import css from "styled-jsx/css";
import { FaGithubSquare } from "react-icons/fa";

const styled = css`
  .footer {
    margin-top: 20px;
    width: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    height: auto;
    padding: 15px 0;

    box-shadow: rgba(50, 50, 93, 0.3) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  }

  .footText {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .footText h4 {
    color: lightgray;
  }
`;

export default function Footer() {
  return (
    <>
      <div className="footer">
        <Link href="https://github.com/ezurno/next-movies">
          <div className="footText">
            <FaGithubSquare
              style={{
                color: "darkgrey",
                fontSize: "50px",
              }}
            />

            <h4>20230511 @ezurno</h4>
          </div>
        </Link>
      </div>
      <style jsx>{styled}</style>
    </>
  );
}
