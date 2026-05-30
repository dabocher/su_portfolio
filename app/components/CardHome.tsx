import Image from "next/image";

interface CardHomeProps {
  src: string;
  alt?: string;
}

const CardHome = ({ src, alt = "Susana Subirana" }: CardHomeProps) => {
  return (
    <div className="bg-[#f5efe6] text-zinc-800 p-1 rounded-lg overflow-hidden  w-24 h-24 md:w-36 md:h-36 lg:w-48">
      <div className="relative w-full h-full">
        <Image src={src} alt={alt} fill className="rounded-lg object-cover" />
      </div>
    </div>
  );
};

export default CardHome;
