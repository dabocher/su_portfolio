import { CardLogo } from "@/app/components/CardLogo";

const images = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  src: `/images/logos/logo${i + 1}.webp`,
  alt: `Logo ${i + 1}`,
}));

const LogosPage = () => {
  return (
    <main className="flex flex-col h-full w-full  font-sans text-zinc-800">
      <div className="w-full  bg-[#f5efe6]  p-4 rounded-lg">
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 w-full place-items-center gap-4 ">
          {images.map((image) => (
            <CardLogo key={image.id} src={image.src} alt={image.alt} />
          ))}
        </div>
      </div>
    </main>
  );
};
export default LogosPage;
