import Link from "next/link";
import { useRouter } from "next/router";
import css from "styled-jsx/css";

const styled = css`
  nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 10px;
    box-shadow: rgba(50, 50, 93, 0.3) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  }
  img {
    max-width: 100px;
    margin-bottom: 5px;
  }
  nav a {
    font-weight: 600;
    font-size: 18px;
  }
  .active {
    color: tomato;
  }
  nav div {
    display: flex;
    column-gap: 10px;
  }

  .line {
    width: 100%;
    justify-content: space-around;
    align-items: center;
    display: flex;
  }
`;

export default function NavBar() {
  const router = useRouter();
  return (
    <>
      <nav>
        <img src="vercel.svg" />
        <div className={"line"}>
          <Link legacyBehavior href="/">
            <a className={router.pathname === "/" ? "active" : ""}>Home</a>
          </Link>
          <Link legacyBehavior href="/about">
            <a className={router.pathname === "/about" ? "active" : ""}>
              About
            </a>
          </Link>
        </div>
        <style jsx>{styled}</style>
      </nav>
    </>
  );
}
