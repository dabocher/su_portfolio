import Image from "next/image";
interface CardLogoProps {
  src: string;
  alt?: string;
}

export const CardLogo = ({ src, alt = "Logo" }: CardLogoProps) => {
  const logoImageSrc = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    src: `/images/logos/logo${i + 1}.webp`,
    alt: `Logo ${i + 1}`,
  }));
  return (
    <div className="bg-[#f5efe6] text-zinc-800 p-1  overflow-hidden  w-36 h-36 md:w-48 md:h-48 lg:w-64 lg:h-64 ">
      <div className="relative w-full h-full flex items-center justify-center bg-white">
        <Image
          src={src}
          alt={alt}
          width={200}
          height={200}
          className="object-cover"
        />
      </div>
    </div>
  );
};
