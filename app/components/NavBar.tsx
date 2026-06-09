import Link from "next/link";
import { NavLinks } from "./NavLinks";
const NavBar = () => {
  return (
    <nav className="flex py-2 sm:py-4  text-xl sm:text-2xl md:text-3xl  font-sans font-semibold ">
      <NavLinks />
    </nav>
  );
};

export default NavBar;
