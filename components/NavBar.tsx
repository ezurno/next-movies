import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const router = useRouter();
  // Next.js 내 route 를 관리하는 Hook, console.log 를 찍어보면 상세 정보를 알 수 있음
  // console.log(router);
  return (
    <nav>
      <Link
        className={`${styles.link} ${
          router.pathname === "/" ? styles.active : ""
        }`}
        href="/"
      >
        Home
      </Link>
      <Link
        className={[
          styles.link,
          router.pathname === "/about" ? styles.active : "",
        ].join(" ")}
        href="/about"
      >
        About
      </Link>
    </nav>
  );
  // Link Component 는 anchor 대신 사용함 (re-rendering 에 유용)
}
