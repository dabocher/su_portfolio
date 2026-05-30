import CardHome from "./components/CardHome";

const images = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  src: `/images/home/susu${i + 1}.webp`,
  alt: `Susana Subirana ${i + 1}`,
}));

const HomePage = () => {
  return (
    <main className="flex flex-col items-center justify-center font-sans gap-4 md:gap-8 md:pt-8 text-zinc-800 ">
      <h1 className="text-[48px] md:text-[64px] font-semibold leading-10 tracking-tight text-center">
        Susana Subirana <span className="text-red-600">Portfolio</span>
      </h1>
      <div className="w-full  bg-[#f5efe6]  p-4 rounded-lg">
        <div className="grid grid-cols-3 gap-4">
          {images.map((image) => (
            <CardHome key={image.id} src={image.src} alt={image.alt} />
          ))}
        </div>
      </div>
    </main>
  );
};
export default HomePage;
