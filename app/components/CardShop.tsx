import Image from "next/image";

interface CardShopProps {
  src: string;
  alt: string;
  title: string;
  description: string;

  resolution: string;
}

export const CardShop = ({
  src,
  alt,
  title,
  description,

  resolution,
}: CardShopProps) => {
  return (
    <div className="bg-[#f5efe6] text-zinc-800 p-4 rounded-lg flex flex-col gap-4  ">
      <div className="relative w-full aspect-video">
        <Image src={src} alt={alt} fill className="rounded-lg object-cover" />
      </div>
      <h2 className="font-sans text-2xl">{title}</h2>
      <h3>{description}</h3>

      <div className="flex justify-between">
        <div>
          <p>Calidad papel: </p>
          <p>300g/m2</p>
        </div>
        <div>
          <p>Resolución: </p> <p>{resolution}</p>
        </div>
        <div>
          <p>Tamaños disponibles: </p> <p>3600 x 1800 cm</p>
        </div>
      </div>

      <div className="flex justify-between">
        <p>Precio: 36 euros</p>

        <button className="rounded-lg px-4 py-1 bg-green-300">Comprar</button>
      </div>
    </div>
  );
};
