import { ImageAnimation } from "./ImageAnimation";

interface CardAnimationProps {
  id: string;
  title: string;
  description: string;
}

export const CardAnimation = ({
  id,
  title,
  description,
}: CardAnimationProps) => {
  return (
    <div className="font-yanone bg-[#f5efe6] text-zinc-800 p-4 rounded-lg flex flex-col gap-2 items-center w-full">
      <div className="relative w-full">
        <ImageAnimation src={`/images/animaciones/animacion${id}.webp`} />
      </div>
      <h2 className="text-2xl font-sans font-semibold">{title}</h2>{" "}
      <p className="">{description}</p>
    </div>
  );
};
