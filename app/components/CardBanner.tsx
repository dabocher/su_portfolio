import Image from "next/image";

interface CardBannerProps {
  title: string;
  description: string;
  id: string;
  year: number;
}

export const CardBanner = ({
  title,
  description,
  id,
  year,
}: CardBannerProps) => {
  return (
    <div className="font-yanone bg-[#f5efe6] text-zinc-800 p-4 rounded-lg flex flex-col gap-2 items-center w-full">
      <h2 className="text-2xl font-sans font-semibold">{title}</h2>{" "}
      <div className="relative w-[350px] h-[350px]">
        <Image
          src={`/images/carteles/cartel${id}.webp`}
          alt={title}
          fill
          className="rounded-lg object-contain"
        />
      </div>
      <h3 className="text-xl text-center font-yanone">{year}</h3>
      <p className="text-center">{description}</p>
    </div>
  );
};
