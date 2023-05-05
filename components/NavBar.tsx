import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <style jsx global>{`
          a {
            text-decoration: none;
          }
          nav {
            background-color: tomato;
          }
        `}</style>
      </nav>
    </>
  );
}
