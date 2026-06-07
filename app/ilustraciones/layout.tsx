import { IllustrationsLinks } from "../components/IllustrationsLinks";

const IlustracionesLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <section className="flex flex-col mx-4 gap-2 md:w-3/4">
      <header className="flex flex-col items-center  justify-center bg-[#e6ded2] font-semibold text-zinc-800 rounded-sm font-sans h-full">
        <IllustrationsLinks />
      </header>
      <div className="">{children}</div>
    </section>
  );
};
export default IlustracionesLayout;
