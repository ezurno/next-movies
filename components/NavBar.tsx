import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  // Next.js 내 route 를 관리하는 Hook, console.log 를 찍어보면 상세 정보를 알 수 있음
  // console.log(router);
  return (
    <nav>
      <Link
        style={{
          color: router.pathname === "/" ? "red " : "blue",
        }}
        href="/"
      >
        Home
      </Link>
      <Link
        style={{
          color: router.pathname === "/about" ? "red " : "blue",
        }}
        href="/about"
      >
        About
      </Link>
    </nav>
  );
  // Link Component 는 anchor 대신 사용함 (re-rendering 에 유용)
}
