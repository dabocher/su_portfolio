import Image from "next/image";
import ImageModal from "./ImageModal";

interface CardProjectProps {
  id: string;
  alt?: string;
  title: string;
  description: string;
  year: number;
}

export const CardProject = ({
  id,
  alt = "Imagen del proyecto",
  title,
  description,
  year,
}: CardProjectProps) => {
  const projectImageSrc = Array.from({ length: 4 }, (_, i) => ({
    id: i + 1,
    src: `/images/proyectos/proyecto${id}/proyecto${id}${i + 1}.webp`,
    alt: `Imagen ${i + 1}`,
  }));

  return (
    <div className="bg-[#f5efe6] text-zinc-800 p-4 rounded-lg flex flex-col gap-4  ">
      <div className="flex gap-4">
        <div className="  font-yanone">
          <div className="shrink-0 w-24 sm:w-32 relative">
            <Image
              src={`/images/proyectos/proyecto${id}.webp`}
              alt={alt}
              width={200}
              height={200}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <h2 className="text-xl sm:text-3xl font-semibold">{title}</h2>
          <p className="font-yanone text-sm sm:text-lg">({year})</p>
        </div>
      </div>
      <p className=" text-md sm:text-xl font-yanone">{description}</p>
      <ImageModal images={projectImageSrc} />
    </div>
  );
};
