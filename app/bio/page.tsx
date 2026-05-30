import Image from "next/image";
const Bio = () => {
  return (
    <main className="flex flex-col items-center justify-center   h-full">
      <h1 className="text-4xl font-semibold leading-10 tracking-tight pb-4 text-center">
        Bio
      </h1>
      <div className="max-w-2xl px-8 pb-4 text-center text-sm font-yanone text-gray-700">
        <p className="text-justify">
          Susana Subirana es una ilustradora y diseñadora gráfica con sede en
          Barcelona. Con más de 20 años de experiencia, ha trabajado en una
          amplia variedad de proyectos, desde libros infantiles hasta carteles
          publicitarios. Su estilo se caracteriza por su uso vibrante del color
          y su enfoque narrativo, creando imágenes que cuentan historias y
          evocan emociones. A lo largo de su carrera, Susana ha colaborado con
          editoriales, agencias de publicidad y marcas, ganando reconocimiento
          por su creatividad y habilidad para comunicar visualmente.
        </p>
      </div>
      <div className="max-w-2xl px-16 ">
        <Image
          src="/images/bio/susu0.webp"
          alt="Susana Subirana"
          width={300}
          height={300}
          className="rounded-lg object-cover"
        />
      </div>
    </main>
  );
};
export default Bio;
