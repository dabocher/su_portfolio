import Image from "next/image";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className="w-full  flex items-center justify-center">
      <div className="">
        <Image
          src="/images/home/susulogo.webp"
          alt="Logo Susana Subirana"
          width={32}
          height={32}
          className="rounded-lg object-cover"
        />
      </div>
      <NavBar />
    </header>
  );
};
export default Header;
