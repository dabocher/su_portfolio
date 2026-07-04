import { AnimatedCollage } from "./components/AnimatedCollage";

export const dynamic = "force-dynamic";

const HomePage = () => {
  return (
    <main className="flex flex-col items-center justify-center p-4 font-sans gap-4 md:gap-8 md:pt-8 text-zinc-800 ">
      <h1 className="text-[48px] md:text-[64px] font-semibold leading-10 tracking-tight text-center">
        Susana Subirana <span className="text-red-600">Portfolio</span>
      </h1>

      <AnimatedCollage />
    </main>
  );
};
export default HomePage;
