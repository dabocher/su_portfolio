import Link from "next/link";
import { NavLinks } from "./NavLinks";
const NavBar = () => {
  return (
    <nav className="flex items-center justify-center py-2 sm:py-4  text-xl md:text-4xl font-sans font-semibold">
      <NavLinks />
    </nav>
  );
};

export default NavBar;
