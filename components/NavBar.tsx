import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const router = useRouter();
  return (
    <>
      <nav>
        <Link
          className={`${styles.link} ${
            router.pathname === "/" ? "active" : ""
          }`}
          href="/"
        >
          Home
        </Link>
        <Link
          className={`${styles.link} ${
            router.pathname === "/about" ? "active" : ""
          }`}
          href="/about"
        >
          About
        </Link>

        <style jsx>{`
          a {
            color: blue;
          }
        `}</style>
      </nav>
    </>
  );
}
