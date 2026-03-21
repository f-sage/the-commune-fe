import { Link } from "@radix-ui/themes";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/posts">News</Link>
    </nav>
  );
};

export default Navbar;
