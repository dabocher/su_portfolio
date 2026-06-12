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
        <p>Calidad papel: 300g/m2</p>
        <p>Resolución: {resolution}</p>
        <p>Tamaños disponibles: 3600 x 1800 cm</p>
      </div>

      <div className="flex justify-between">
        <p>Precio: 36 euros</p>

        <button className="rounded-lg px-4 py-2 bg-green-300">Comprar</button>
      </div>
    </div>
  );
};
