import { IllustrationsLinks } from "../components/IllustrationsLinks";

const IlustracionesLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <section className="flex flex-col w-full gap-2">
      <header className="flex flex-col items-center mx-6 justify-center bg-[#e6ded2] font-semibold text-zinc-800 rounded-sm font-sans h-full">
        <IllustrationsLinks />
      </header>
      <div className="w-full px-6">{children}</div>
    </section>
  );
};
export default IlustracionesLayout;
