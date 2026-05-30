import Link from "next/link";
import { NavLinks } from "./NavLinks";
const NavBar = () => {
  return (
    <nav className="flex items-center p-4 text-3xl md:text-4xl font-sans">
      <NavLinks />
    </nav>
  );
};

export default NavBar;
