import Image from "next/image";
const Bio = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      <main className="bg-[#f5efe6] rounded-2xl flex flex-col gap-2 mx-6 sm:mx-8 p-6 md:p-8 text-lg sm:text-xl font-yanone text-zinc-800">
        <div>
          <Image
            src="/images/bio/sulogotexto.webp"
            alt="Susana Subirana"
            width={100}
            height={100}
          />
        </div>
        <p>
          Susana Subirana es una artista especializada en ilustración con sede
          en Barcelona. Con más de 20 años de experiencia, ha trabajado en una
          amplia variedad de proyectos, desde libros infantiles hasta carteles
          publicitarios. Su estilo se caracteriza por su carga didáctica,
          humorística y crítica, por su amor al blanco y negro, su uso vibrante
          del color y su enfoque narrativo, creando imágenes que cuentan
          historias y evocan emociones. A lo largo de su carrera, Susana ha
          colaborado con editoriales, agencias de publicidad y marcas, ganando
          reconocimiento por su creatividad y habilidad para comunicar
          visualmente.
        </p>
        <p>
          Estudió música, canto y baile. 5 años de “Arts i Oficis” en el
          Institut Berguedà. Carrera d’Arts Plàstiques en la Facultat de Belles
          Arts de Barcelona. Fotografía, dibujo, pintura y especialmente
          ilustración. Trabajó durante 5 años ilustrando artículos de opinión en
          el diario Ara. Creó la marca “Laslolasplanet”, cofundadora del local
          “Soniquete”, “Laslolaslocal”, “Laslolasclub” y la casa rural “El
          paraíso de laslolas”. Hasta la fecha, Susana ha publicado 6 libros
          ilustrados. Actualmente, es ilustradora “freelance”
          (FlamencasFantásticas, Festival Kriatura, entre otros) y responsable
          del espacio creativo “La cueva de Laslolas” en El Masnou.
        </p>
        <p></p>
        <p></p>
      </main>
      <div className="flex justify-end sticky bottom-0 pointer-events-none">
        <Image
          src="/images/bio/susinfondo.webp"
          alt="Susana Subirana"
          width={300}
          height={300}
          className="object-contain w-32 sm:w-64 md:w-80 h-auto "
        />
      </div>
    </div>
  );
};
export default Bio;
