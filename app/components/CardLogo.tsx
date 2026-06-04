interface CardLogoProps {
  src: string;
  alt?: string;
}

export const CardLogo = ({ src, alt = "Logo" }: CardLogoProps) => {
  return (
    <div className="bg-[#f5efe6] text-zinc-800 p-1 rounded-lg overflow-hidden  w-36 h-36 md:w-48 md:h-48 lg:w-64 lg:h-64">
      <div className="relative w-full h-full flex items-center justify-center bg-white">
        <img src={src} alt={alt} className="rounded-lg object-cover" />
      </div>
    </div>
  );
};
