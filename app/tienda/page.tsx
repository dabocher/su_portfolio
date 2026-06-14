import { CardShop } from "../components/CardShop";
import { obras } from "../data";

const TiendaPage = () => {
  return (
    <main className="flex flex-col gap-4  justify-center py-4">
      <div className="mx-6 flex flex-col gap-2 text-2xl p-4 rounded-lg  bg-[#f5efe6] text-zinc-800">
        <h3 className="text-3xl font-bold ">"Flamencas Ilustradas"</h3>
        <p className="text-xl text-justify font-yanone">
          Proyecto colaborativo entre dos artistas, Arte sobre Arte. Colección
          de mujeres flamencas en blanco y negro con fotografías de Isa de Calle
          e ilustración de Susana Subirana. Presentada dentro del Jerez OFF
          Festival de 2023.
        </p>
      </div>
      <section className=" rounded-2xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 sm:gap-4 lg: gap-4 font-yanone mx-6 text-zinc-800">
        {obras.map((obra) => (
          <CardShop
            src={obra.image}
            alt={""}
            title={obra.title}
            description={obra.description}
            resolution={obra.resolution}
            key={obra.id}
          />
        ))}
      </section>
    </main>
  );
};

export default TiendaPage;
