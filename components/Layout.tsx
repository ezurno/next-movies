import NavBar from "./NavBar";

interface ILayoutProps {
  children: React.ReactNode;
} // children 은 components 이므로

export default function Layout({ children }: ILayoutProps) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
}
