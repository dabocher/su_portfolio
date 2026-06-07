import Image from "next/image";
import NavBar from "./NavBar";
import Link from "next/dist/client/link";

const Header = () => {
  return (
    <header className="w-full  flex items-center gap-2 sm:gap-4 justify-center">
      <Link href="/bio" className="bg-[#e6ded2] rounded-lg p-1  ">
        <Image
          src="/images/home/susulogo.webp"
          alt="Logo Susana Subirana"
          width={20}
          height={20}
          className="rounded-lg object-cover "
        />
      </Link>
      <NavBar />
    </header>
  );
};
export default Header;
